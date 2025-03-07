import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * AppController
 *
 * Controller for handling the root endpoint of the application.
 */
@Controller()
export class AppController {
  /**
   * Creates an instance of AppController.
   *
   * @param appService - Injected AppService providing business logic for the root endpoint.
   */
  constructor(private readonly appService: AppService) {}
}
