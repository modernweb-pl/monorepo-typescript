import { Controller, Get, Query } from '@nestjs/common';
import { AnalyzeHistoryRequestDto } from './dto';
import { HistoryService } from './history.service';

@Controller('cloudfide')
export class HistoryController {
  constructor(private readonly service: HistoryService) {}

  @Get('analyze')
  async analyze(@Query() query: AnalyzeHistoryRequestDto) {
    return this.service.analyze(query);
  }
}
