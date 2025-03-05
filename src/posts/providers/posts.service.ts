import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(
    /*
     * Injecting Users Service
     */
    private readonly usersService: UsersService,
  ) {}

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
