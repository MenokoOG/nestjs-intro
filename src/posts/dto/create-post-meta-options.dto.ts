import { IsNotEmpty, IsString } from 'class-validator';

/**
 * CreatePostMetaOptionsDto
 *
 * Data Transfer Object for creating meta options for a post.
 * Contains a key-value pair where the key is a non-empty string and the value is required.
 */
export class CreatePostMetaOptionsDto {
  /**
   * The key of the meta option.
   *
   * @example "author"
   */
  @IsString()
  @IsNotEmpty()
  key: string;

  /**
   * The value of the meta option.
   *
   * This can be of any type but must not be empty.
   *
   * @example "John Doe"
   */
  @IsNotEmpty()
  value: any;
}
