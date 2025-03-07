import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

/**
 * AuthController
 *
 * Controller for handling authentication-related routes.
 */
@Controller('auth')
export class AuthController {
  /**
   * Creates an instance of AuthController.
   *
   * @param authService - Injected AuthService to handle authentication logic.
   */
  constructor(
    /**
     * Injecting Auth Service.
     */
    private readonly authService: AuthService,
  ) {}
}
