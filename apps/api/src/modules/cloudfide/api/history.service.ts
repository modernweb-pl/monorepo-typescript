import { Injectable } from '@nestjs/common';
import { AnalyzeHistoryRequestDto, toAnalyzeHistoryRequestModel } from './dto';

@Injectable()
export class HistoryService {
  async analyze(query: AnalyzeHistoryRequestDto) {
    const model = toAnalyzeHistoryRequestModel(query);

    // TODO execute use case
    // TODO convert and return response DTO
    return { model };
  }
}
