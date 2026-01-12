import { Injectable } from '@nestjs/common';
import {
  AnalyzeHistoryRequestModel,
  IHistoryProvider,
  MarketHistory,
} from '../../domain/analyze-history';
import { BinanceClient } from './binance.client';

@Injectable()
export class BinanceHistoryProvider implements IHistoryProvider {
  constructor(private readonly client: BinanceClient) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async fetchHistory(query: AnalyzeHistoryRequestModel): Promise<MarketHistory> {
    return [];
  }
}
