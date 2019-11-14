import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { User } from './models/user';
import { UsersService } from './users.service';
import { AddUserInput } from './models/addUserInput';
import { Inject } from '@nestjs/common';
import { EditUserInput } from './models/editUserInput';
import { ObjectId } from 'bson';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    @Inject(UsersService)
    private readonly usersService: UsersService,
  ) { }

  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  async addUser(@Args('user') userInput: AddUserInput): Promise<User> {
    return this.usersService.add(userInput);
  }

  @Mutation(() => User)
  async editUser(@Args('user') userInput: EditUserInput): Promise<User> {
    return this.usersService.edit(userInput);
  }

  @Mutation(() => String)
  async deleteUser(@Args('userId') id: string): Promise<ObjectId> {
    return this.usersService.delete(new ObjectId(id));
  }
}
