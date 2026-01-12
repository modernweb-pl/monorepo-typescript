import { Injectable } from '@nestjs/common';
import { Result } from '../shared/result';
import { IHistoryProvider } from './history-provider.interface';
import { AnalyzeHistoryRequestModel } from './model';

// TODO const MARKET_SYMBOL = 'BTCUSDC';

@Injectable()
export class AnalyzeHistoryUseCase {
  constructor(private readonly historyProvider: IHistoryProvider) {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async invoke(request: AnalyzeHistoryRequestModel): Promise<Result<any, any>> {
    // console.log({ result: request });
    return { result: request };
  }
}
