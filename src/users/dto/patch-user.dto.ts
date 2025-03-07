import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

/**
 * PatchUserDto
 *
 * Data Transfer Object for patching (updating) an existing user.
 * This DTO extends PartialType from @nestjs/swagger, making all properties from CreateUserDto optional.
 *
 * @see {@link CreateUserDto} for the complete list of user creation properties.
 */
export class PatchUserDto extends PartialType(CreateUserDto) {}
