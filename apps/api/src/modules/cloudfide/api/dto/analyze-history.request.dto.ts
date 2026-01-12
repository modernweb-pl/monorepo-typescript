import { BadRequestException } from '@nestjs/common';
import { isAfter, isEqual, isFuture, isValid } from 'date-fns';
import { AnalyzeHistoryRequestModel } from '../../domain/analyze-history';

export class AnalyzeHistoryRequestDto {
  from: string; // ISO date
  to: string; // ISO date
}

export function toAnalyzeHistoryRequestModel(
  dto: AnalyzeHistoryRequestDto,
): AnalyzeHistoryRequestModel {
  const from = new Date(dto.from);
  const to = new Date(dto.to);

  if (
    !isValid(from) ||
    !isValid(to) ||
    isEqual(from, to) ||
    isAfter(from, to) ||
    isFuture(from) ||
    isFuture(to)
  ) {
    throw new BadRequestException('invalid date range');
  }

  return {
    from,
    to,
  };
}
