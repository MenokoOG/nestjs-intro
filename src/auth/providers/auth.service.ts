import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

/**
 * AuthService
 *
 * Service to handle authentication operations such as user login and verifying authentication.
 */
@Injectable()
export class AuthService {
  /**
   * Creates an instance of AuthService.
   *
   * @param usersService - Injected UsersService used for fetching user information.
   */
  constructor(
    /**
     * Injecting UserService.
     */
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  /**
   * Authenticates a user.
   *
   * This method attempts to authenticate a user using the provided email, password, and id.
   * It fetches a user (currently hard-coded to ID 1234 for demonstration) and returns a sample token.
   *
   * @param email - The email address of the user.
   * @param password - The password of the user.
   * @param id - The unique identifier of the user.
   * @returns A sample authentication token.
   */
  public login(email: string, password: string, id: number) {
    const user = this.usersService.findOneById(1234);
    // login
    return 'SAMPLE_TOKEN';
  }

  /**
   * Checks if the user is authenticated.
   *
   * Currently, this method always returns true.
   *
   * @returns A boolean indicating if the user is authenticated.
   */
  public isAuth() {
    return true;
  }
}
