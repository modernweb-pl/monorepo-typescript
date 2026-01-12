import { Injectable } from '@nestjs/common';
import {
  AnalyzeHistoryRequestModel,
  IHistoryProvider,
  MarketHistory,
} from '../../domain/analyze-history';
import { BinanceClient, BinanceKline } from './binance.client';

const MARKET_SYMBOL = 'BTCUSDC';
const KLINE_INTERVAL = '1h';

function toMarketHistory(klines: BinanceKline[]): MarketHistory {
  return klines.map((it) => ({
    from: it.openTime,
    to: it.closeTime,
    lowPrice: it.lowPrice,
    highPrice: it.highPrice,
  }));
}

@Injectable()
export class BinanceHistoryProvider implements IHistoryProvider {
  constructor(private readonly client: BinanceClient) {}

  async fetchHistory(query: AnalyzeHistoryRequestModel): Promise<MarketHistory> {
    // TODO dynamically calculate interval to avoid exceeding response limit of 1000 klines
    return this.client
      .fetchKlines({
        startTime: query.from.getTime(),
        endTime: query.to.getTime(),
        interval: KLINE_INTERVAL,
        symbol: MARKET_SYMBOL,
      })
      .then(toMarketHistory);
  }
}
