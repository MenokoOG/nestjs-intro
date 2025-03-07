import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PatchUserDto } from './dto/patch-user.dto';
import { UsersService } from './providers/users.service';
import {
  ApiTags,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';

/**
 * UsersController
 *
 * Controller to handle user-related endpoints.
 */
@Controller('users')
@ApiTags('Users')
export class UsersController {
  /**
   * Creates an instance of UsersController.
   *
   * @param usersService - The service handling business logic for users.
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * GET /users
   *
   * Endpoint to fetch all users with pagination.
   *
   * @param limit - The upper limit of pages for pagination (default: 10).
   * @param page - The page number to return (default: 1).
   * @returns A list of users.
   */
  @Get()
  @ApiOperation({
    summary: 'Fetches a list of registered users on the application.',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    description: 'The upper limit of pages you want the pagination to return',
    example: 10,
    required: false,
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    description:
      'The position of the page number that you want the API to return',
    example: 1,
    required: false,
  })
  @ApiResponse({ status: 200, description: 'Users fetched successfully.' })
  public getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    // Since there's no ID in this route, we can pass an empty object for the DTO
    return this.usersService.findAll({}, limit, page);
  }

  /**
   * GET /users/:id
   *
   * Endpoint to fetch a single user by ID.
   *
   * @param id - Unique identifier of the user.
   * @returns The user object corresponding to the given ID.
   */
  @Get(':id')
  @ApiOperation({ summary: 'Fetches a single user by ID.' })
  @ApiParam({ name: 'id', description: 'User ID', type: Number, example: 1234 })
  @ApiResponse({ status: 200, description: 'User fetched successfully.' })
  public getUserById(@Param('id') id: number) {
    return this.usersService.findOneById(id);
  }

  /**
   * POST /users
   *
   * Endpoint to create a new user.
   *
   * @param createUserDto - Data transfer object containing new user details.
   * @returns A confirmation message upon user creation.
   */
  @Post()
  @ApiOperation({ summary: 'Creates a new user.' })
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  public createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'You sent a post request to users endpoint';
  }

  /**
   * PATCH /users
   *
   * Endpoint to update an existing user.
   *
   * @param patchUserDto - Data transfer object containing user updates.
   * @returns The updated user data.
   */
  @Patch()
  @ApiOperation({ summary: 'Updates an existing user.' })
  @ApiResponse({ status: 200, description: 'User updated successfully.' })
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
