import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PatchPostDto } from './dto/patch-post.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(
    /*
     * Injecting Posts Service
     */
    private readonly postsService: PostsService,
  ) {}

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
