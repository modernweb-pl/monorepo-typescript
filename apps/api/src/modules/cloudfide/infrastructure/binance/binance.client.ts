import { Injectable } from '@nestjs/common';
import axios from 'axios';

type BinanceKlinesRequest = {
  symbol: string;
  interval: string; // TODO enum
  startTime: number;
  endTime: number;
};

export type BinanceKline = {
  openTime: number;
  closeTime: number;
  lowPrice: number;
  highPrice: number;
};

function toKline(item: unknown[]): BinanceKline {
  const [
    openTime,
    _openPrice,
    highPrice,
    lowPrice,
    _closePrice,
    _volume,
    closeTime,
    _quoteAssetVolume,
    _numberOfTrades,
    _takerBuyBaseAssetVolume,
    _takerBuyQuoteAssetVolume,
  ] = item;
  return {
    openTime: openTime as number,
    closeTime: closeTime as number,
    lowPrice: parseFloat(lowPrice as string),
    highPrice: parseFloat(highPrice as string),
  };
}

@Injectable()
export class BinanceClient {
  // TODO binance base URL configuration
  // TODO binance API Key configuration

  async fetchKlines(params: BinanceKlinesRequest): Promise<BinanceKline[]> {
    return axios
      .get('https://api.binance.com/api/v3/klines', { params: params })
      .then(({ data }) => data.map(toKline));
  }
}
