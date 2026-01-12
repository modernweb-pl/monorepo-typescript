import { Controller, Get } from '@nestjs/common';

@Controller('cloudfide')
export class HistoryController {
  @Get('analyze')
  async analyze(/*@Query() query: AnalyzeHistoryRequestDto*/) {
    return {};
  }
}
