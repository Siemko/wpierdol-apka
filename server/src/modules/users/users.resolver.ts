import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { User } from './models/user';
import { UsersService } from './users.service';
import { AddUserInput } from './models/addUserInput';
import { EditUserInput } from './models/editUserInput';
import { ObjectId } from 'bson';
import { Inject } from '@nestjs/common';
import { ObjectIdScalar } from 'src/shared/objectIdScalar';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    @Inject(UsersService)
    private readonly userService: UsersService,
  ) {}

  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  async addUser(@Args('user') userInput: AddUserInput): Promise<User> {
    return this.userService.add(userInput);
  }

  @Mutation(() => User)
  async editUser(@Args('user') userInput: EditUserInput): Promise<User> {
    return this.userService.edit(userInput);
  }

  @Mutation(() => ObjectIdScalar)
  async deleteUser(
    @Args({ name: 'userId', type: () => ObjectIdScalar }) id: ObjectId,
  ): Promise<ObjectId> {
    return this.userService.delete(id);
  }
}
