import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * GetUsersParamDto
 *
 * Data Transfer Object for user query parameters.
 * This DTO allows specifying an optional user ID parameter for filtering user queries.
 */
export class GetUsersParamDto {
  /**
   * Optional user ID parameter.
   *
   * @example 1234
   */
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
