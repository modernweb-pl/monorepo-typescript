import { Module } from '@nestjs/common';
import { HistoryController, HistoryService } from './api';

@Module({
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class CloudfideModule {}
