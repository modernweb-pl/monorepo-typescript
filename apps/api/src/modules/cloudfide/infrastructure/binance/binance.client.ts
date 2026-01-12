import { Injectable } from '@nestjs/common';
import axios from 'axios';

type BinanceKlinesRequest = {
  symbol: string;
  interval: string; // TODO enum
  startTime: number;
  endTime: number;
};

@Injectable()
export class BinanceClient {
  // TODO binance base URL configuration

  // TODO return type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async fetchKlines(params: BinanceKlinesRequest): Promise<any> {
    return axios
      .get('https://api.binance.com/api/v3/klines', { params: params })
      .then(({ data }) => data);
  }
}
