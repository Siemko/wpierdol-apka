import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { User } from './models/user';
import { UsersService } from './users.service';
import { AddUserInput } from './models/addUserInput';
import { ObjectIdScalar } from '../common/GraphGLScalars/ObjectIdScalar';
import { ObjectId } from 'bson';

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

  @Mutation(() => ObjectIdScalar)
  async deleteUser(@Args({ name: 'userId', type: () => ObjectIdScalar }) userId: ObjectId): Promise<ObjectId> {
    return await this.usersService.delete(userId);
  }
}
