import { Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }
}
