import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';

/**
 * PostsService
 *
 * Service to handle operations related to posts.
 */
@Injectable()
export class PostsService {
  /**
   * Creates an instance of PostsService.
   *
   * @param usersService - Injected UsersService to access user-related data.
   */
  constructor(
    /**
     * Injecting Users Service.
     */
    private readonly usersService: UsersService,
  ) {}

  /**
   * Retrieve all posts for a given user.
   *
   * This method fetches the user by the provided userId and returns an array of post objects
   * associated with that user.
   *
   * @param userId - Unique identifier of the user whose posts are to be fetched.
   * @returns An array of post objects, each containing the user, title, and content.
   */
  public findAll(userId: number) {
    const user = this.usersService.findOneById(userId);

    return [
      {
        user: user,
        title: 'Test Tile',
        content: 'Test Content',
      },
      {
        user: user,
        title: 'Test Tile 2',
        content: 'Test Content 2',
      },
    ];
  }
}
