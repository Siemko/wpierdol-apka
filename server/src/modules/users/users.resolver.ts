import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { User } from './models/user';
import { UsersService } from './users.service';
import { AddUserInput } from './models/addUserInput';
import { UpdateUserInput } from './models/updateUserInput';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Mutation(() => User)
  async addUser(@Args('user') userInput: AddUserInput): Promise<User> {
    return await this.usersService.add(userInput);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: string): Promise<User> {
    return await this.usersService.delete(id);
  }

  @Mutation(() => User)
  async updateUser(@Args('id') id: string, @Args('user') userInput: UpdateUserInput): Promise<User> {
    return await this.usersService.update(id, userInput);
  }
}
