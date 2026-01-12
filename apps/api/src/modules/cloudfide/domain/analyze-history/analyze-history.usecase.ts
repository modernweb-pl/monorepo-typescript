import { Inject, Injectable } from '@nestjs/common';
import { Result } from '../shared/result';
import { HISTORY_PROVIDER_SYMBOL, IHistoryProvider } from './history-provider.interface';
import {
  AnalyzeHistoryError,
  AnalyzeHistoryRequestModel,
  AnalyzeHistoryResultModel,
} from './model';

@Injectable()
export class AnalyzeHistoryUseCase {
  constructor(
    @Inject(HISTORY_PROVIDER_SYMBOL) private readonly historyProvider: IHistoryProvider,
  ) {}

  async invoke(
    request: AnalyzeHistoryRequestModel,
  ): Promise<Result<AnalyzeHistoryResultModel, AnalyzeHistoryError>> {
    try {
      const history = await this.historyProvider.fetchHistory(request);
      const result = history.reduce<AnalyzeHistoryResultModel>(
        (acc, it) => {
          if (it.highPrice > acc.highPrice) {
            acc.highPrice = it.highPrice;
          }
          if (it.lowPrice < acc.lowPrice) {
            acc.lowPrice = it.lowPrice;
          }
          return acc;
        },
        {
          from: request.from,
          to: request.to,
          lowPrice: Number.POSITIVE_INFINITY,
          highPrice: Number.NEGATIVE_INFINITY,
        },
      );
      return { result };
    } catch (_) {
      return { error: new AnalyzeHistoryError('cannot fetch history') };
    }
  }
}
