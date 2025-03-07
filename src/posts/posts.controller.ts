import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PatchPostDto } from './dto/patch-post.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';

/**
 * PostsController
 *
 * Controller to handle endpoints related to blog posts.
 */
@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  /**
   * Creates an instance of PostsController.
   *
   * @param postsService - Injected PostsService to manage post-related operations.
   */
  constructor(
    /**
     * Injecting Posts Service.
     */
    private readonly postsService: PostsService,
  ) {}

  /**
   * GET /posts/:userId
   *
   * Retrieve all posts for a specific user.
   *
   * @param userId - The ID of the user whose posts are to be retrieved.
   * @returns An array of posts belonging to the specified user.
   */
  @Get('/:userId')
  @ApiOperation({
    summary: 'Retrieve all posts for a specific user',
  })
  @ApiParam({
    name: 'userId',
    type: Number,
    description: 'ID of the user whose posts are being retrieved',
    example: 123,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved the posts for the given user.',
  })
  public getPosts(@Param('userId') userId: number) {
    return this.postsService.findAll(userId);
  }

  /**
   * POST /posts
   *
   * Creates a new blog post.
   *
   * @param createPostDto - Data Transfer Object containing the details of the post to be created.
   */
  @ApiOperation({
    summary: 'Creates a new post for the blog',
  })
  @ApiResponse({
    status: 201,
    description:
      'You get a success 201 response if the post is created successfully',
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
  }

  /**
   * PATCH /posts
   *
   * Updates an existing blog post in the database.
   *
   * @param patchPostsDto - Data Transfer Object containing the updated post details.
   */
  @ApiOperation({
    summary: 'Updates an existing blog post in the database',
  })
  @ApiResponse({
    status: 200,
    description:
      'You get a success 200 response if the post is updated successfully',
  })
  @Patch()
  public updatePost(@Body() patchPostsDto: PatchPostDto) {
    console.log(patchPostsDto);
  }
}
