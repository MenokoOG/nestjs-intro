import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'First name of the user',
    minLength: 3,
    maxLength: 96,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstName: string;

  @ApiPropertyOptional({
    description: 'Last name of the user',
    minLength: 3,
    maxLength: 96,
  })
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  lastName: string;

  @ApiProperty({ description: 'Email address of the user', format: 'email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description:
      'Password for the user. Minimum eight characters, at least one letter, one number and one special character',
    minLength: 8,
    pattern: '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      'Minimum eight characters, at least one letter, one number and one special character',
  })
  password: string;
}
