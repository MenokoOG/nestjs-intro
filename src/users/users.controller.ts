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

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Endpoint to fetch all users with pagination
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

  // Endpoint to fetch a single user by ID
  @Get(':id')
  @ApiOperation({ summary: 'Fetches a single user by ID.' })
  @ApiParam({ name: 'id', description: 'User ID', type: Number, example: 1234 })
  @ApiResponse({ status: 200, description: 'User fetched successfully.' })
  public getUserById(@Param('id') id: number) {
    return this.usersService.findOneById(id);
  }

  // Endpoint to create a new user
  @Post()
  @ApiOperation({ summary: 'Creates a new user.' })
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  public createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'You sent a post request to users endpoint';
  }

  // Endpoint to update an existing user
  @Patch()
  @ApiOperation({ summary: 'Updates an existing user.' })
  @ApiResponse({ status: 200, description: 'User updated successfully.' })
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
