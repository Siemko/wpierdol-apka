import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { User } from './models/user';
import { UsersService } from './users.service';
import { AddUserInput } from './models/addUserInput';
import { ObjectIdScalar } from '../common/GraphGLScalars/ObjectIdScalar';
import { ObjectId } from 'bson';
import { EditUserInput } from './models/editUserInput';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

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

  @Mutation(() => ObjectIdScalar)
  async deleteUser(@Args({ name: 'userId', type: () => ObjectIdScalar }) userId: ObjectId): Promise<ObjectId> {
    return this.usersService.delete(userId);
  }
}
