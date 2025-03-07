import { Injectable } from '@nestjs/common';

/**
 * AppService
 *
 * Provides application-level services.
 */
@Injectable()
export class AppService {
  /**
   * Retrieves a greeting message.
   *
   * @returns A greeting message as a string.
   */
  getHello(): string {
    return 'Hello Menoko OG!';
  }
}
