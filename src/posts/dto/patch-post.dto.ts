import { CreatePostDto } from './create-post.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

/**
 * PatchPostDto
 *
 * Data Transfer Object for updating a blog post.
 * This DTO extends PartialType(CreatePostDto) which makes all properties from CreatePostDto optional,
 * and adds a required `id` property to identify the post to update.
 *
 * @see {@link CreatePostDto} for the complete set of properties available when creating a post.
 */
export class PatchPostDto extends PartialType(CreatePostDto) {
  /**
   * The ID of the post to update.
   *
   * @example 1
   */
  @ApiProperty({
    description: 'The ID of the post to update.',
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
