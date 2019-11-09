import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { User } from './models/user';
import { UsersService } from './users.service';
import { AddUserInput } from './models/add-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Mutation(() => User)
  async addUser(@Args('user') newUser: AddUserInput) : Promise<User> {
    return await this.usersService.add(newUser);
  }
}
