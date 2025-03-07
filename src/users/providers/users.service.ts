import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUsersParamDto } from '../dto/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * UsersService
 *
 * Class to connect to Users table and perform business operations.
 */
@Injectable()
export class UsersService {
  /**
   * Creates an instance of UsersService.
   *
   * @param authService - Injected AuthService instance.
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /**
   * Find all users.
   *
   * This method retrieves a list of users. It accepts query parameters
   * and pagination options.
   *
   * @param getUserParamDto - DTO containing parameters to filter users.
   * @param limit - Maximum number of users to retrieve.
   * @param page - The page number for pagination.
   * @returns An array of user objects.
   */
  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);

    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Alice',
        email: 'alice@doe.com',
      },
    ];
  }

  /**
   * Find a user by ID.
   *
   * Retrieves a user by the given unique identifier.
   *
   * @param id - The unique identifier of the user.
   * @returns The user object with the specified ID.
   */
  public findOneById(id: number) {
    return {
      id: 1234,
      firstName: 'Alice',
      email: 'alice@doe.com',
    };
  }
}
