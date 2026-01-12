import { Module } from '@nestjs/common';
import { HistoryController, HistoryService } from './api';
import { AnalyzeHistoryUseCase, HISTORY_PROVIDER_SYMBOL } from './domain/analyze-history';
import { BinanceHistoryProvider } from './infrastructure/binance';

@Module({
  controllers: [HistoryController],
  providers: [
    HistoryService,
    AnalyzeHistoryUseCase,
    {
      provide: HISTORY_PROVIDER_SYMBOL,
      useClass: BinanceHistoryProvider,
    },
  ],
})
export class CloudfideModule {}
