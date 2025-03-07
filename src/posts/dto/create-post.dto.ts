import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { postStatus } from '../enums/post-status.enum';
import { PostType } from '../enums/post-type.enum';
import { Type } from 'class-transformer';
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * CreatePostDto
 *
 * Data Transfer Object for creating a new post.
 * This DTO contains properties such as title, post type, slug, status, and additional optional properties
 * including content, schema, featured image URL, publication date, tags, and meta options.
 */
export class CreatePostDto {
  /**
   * The title of the post.
   *
   * @example "My Awesome Post"
   */
  @ApiProperty({
    description: 'The title of the post.',
    example: 'My Awesome Post',
  })
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string;

  /**
   * The type of the post.
   *
   * Possible values: 'post', 'page', 'story', 'series'
   */
  @ApiProperty({
    enum: PostType,
    description: "Possible values  'post', 'page', 'story', 'series'",
  })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: string;

  /**
   * The slug for the post URL.
   *
   * Must be all lowercase letters, use dashes (-) as separators, and have no spaces.
   * @example "my-url"
   */
  @ApiProperty({
    description: "For example 'my-url'",
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  slug: string;

  /**
   * The status of the post.
   *
   * Possible values: 'draft', 'scheduled', 'review', 'published'
   */
  @ApiProperty({
    enum: postStatus,
    description: "Possible values 'draft', 'scheduled', 'review', 'published'",
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;

  /**
   * The main content of the post.
   *
   * @example "This is the detailed content of the post..."
   */
  @ApiPropertyOptional({
    description: 'The main content of the post.',
    example: 'This is the detailed content of the post...',
  })
  @IsOptional()
  @IsString()
  content?: string;

  /**
   * JSON schema for the post.
   *
   * Serialize your JSON object; otherwise, a validation error will be thrown.
   * @example '{ "@context": "https://schema.org", "@type": "Person" }'
   */
  @ApiPropertyOptional({
    description:
      'Serialize your JSON object else a validation error will be thrown',
    example:
      '{\r\n    "@context": "https://schema.org",\r\n    "@type": "Person"\r\n  }',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  /**
   * URL for the featured image.
   *
   * @example "http://localhost.com/images/image1.jpg"
   */
  @ApiPropertyOptional({
    description: 'Provide a valid URL for the featured image.',
    example: 'http://localhost.com/images/image1.jpg',
  })
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;

  /**
   * The publication date of the post.
   *
   * Must be a valid timestamp in ISO8601 format.
   * @example "2024-03-16T07:46:32+0000"
   */
  @ApiProperty({
    description: 'Must be a valid timestamp in ISO8601',
    example: '2024-03-16T07:46:32+0000',
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  /**
   * An array of tags associated with the post.
   *
   * Each tag must be a string with a minimum length of 3 characters.
   * @example ["nestjs", "nestjs-tutorial"]
   */
  @ApiPropertyOptional({
    description: 'Array of tags passed as string values',
    example: ['nestjs', 'nestjs-tutorial'],
  })
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  /**
   * An array of meta options for the post.
   *
   * Each meta option is an object containing a key and a value.
   * @example [{ key: "author", value: "John Doe" }]
   */
  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description: 'The key for the meta option and can be any string',
          example: 'author',
        },
        value: {
          type: 'any',
          description: 'The value for the meta option and can be any value',
          example: 'John Doe',
        },
      },
    },
  })
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[];
}
