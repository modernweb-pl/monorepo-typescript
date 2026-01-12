import { Module } from '@nestjs/common';
import { HistoryController } from './api';

@Module({
  controllers: [HistoryController],
})
export class CloudfideModule {}
