import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class GetUsersParamDto {
  @ApiPropertyOptional({
    description: 'Optional user ID parameter',
    example: 1234,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
