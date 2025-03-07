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

/**
 * CreateUserDto
 *
 * Data Transfer Object for creating a new user.
 * It contains all the necessary properties to create a user including their first name, last name, email, and password.
 */
export class CreateUserDto {
  /**
   * First name of the user.
   *
   * Must be a non-empty string with a minimum length of 3 and a maximum length of 96 characters.
   *
   * @example "John"
   */
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

  /**
   * Last name of the user.
   *
   * This field is optional. If provided, it must be a string with a minimum length of 3 and a maximum length of 96 characters.
   *
   * @example "Doe"
   */
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

  /**
   * Email address of the user.
   *
   * Must be a valid email format.
   *
   * @example "john.doe@example.com"
   */
  @ApiProperty({ description: 'Email address of the user', format: 'email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  /**
   * Password for the user.
   *
   * Must be a non-empty string that is at least 8 characters long and contains at least one letter, one number, and one special character.
   *
   * @example "Passw0rd!"
   */
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
