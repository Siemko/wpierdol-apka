import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { User } from './models/user';
import { UsersService } from './users.service';
import { AddUserInput } from './models/add-user.input';
import { Inject } from '@nestjs/common';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    @Inject(UsersService) private readonly usersService: UsersService,
  ) {}

  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  async addUser(@Args('input') input: AddUserInput): Promise<User> {
    return this.usersService.add(input);
  }
}
