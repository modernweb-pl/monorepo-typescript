import { Injectable } from '@nestjs/common';
import { AnalyzeHistoryUseCase } from '../domain/analyze-history';
import { AnalyzeHistoryRequestDto, toAnalyzeHistoryRequestModel } from './dto';

@Injectable()
export class HistoryService {
  constructor(private readonly analyzeHistoryUseCase: AnalyzeHistoryUseCase) {}

  async analyze(query: AnalyzeHistoryRequestDto) {
    const model = toAnalyzeHistoryRequestModel(query);
    const result = this.analyzeHistoryUseCase.invoke(model);

    // TODO convert and return response DTO
    return { result };
  }
}
