import { BadRequestException, Injectable } from '@nestjs/common';
import { AnalyzeHistoryUseCase } from '../domain/analyze-history';
import { isError } from '../domain/shared/result';
import { AnalyzeHistoryRequestDto, toAnalyzeHistoryRequestModel } from './dto';

@Injectable()
export class HistoryService {
  constructor(private readonly analyzeHistoryUseCase: AnalyzeHistoryUseCase) {}

  async analyze(query: AnalyzeHistoryRequestDto) {
    const model = toAnalyzeHistoryRequestModel(query);
    const res = await this.analyzeHistoryUseCase.invoke(model);

    if (isError(res)) {
      // TODO convert errors
      throw new BadRequestException(res.error?.message);
    }

    // TODO convert and return response DTO
    return { result: res.result };
  }
}
