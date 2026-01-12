import { AnalyzeHistoryRequestModel, MarketHistory } from './model';

export const HISTORY_PROVIDER_SYMBOL = Symbol('HISTORY_PROVIDER_SYMBOL');

export interface IHistoryProvider {
  fetchHistory(query: AnalyzeHistoryRequestModel): Promise<MarketHistory>;
}
