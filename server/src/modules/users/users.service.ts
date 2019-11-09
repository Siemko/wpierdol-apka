import { ReturnModelType } from '@typegoose/typegoose';
import { User } from './models/user';
import { InjectModel } from '@nestjs/mongoose';
import { AddUserInput } from './models/add-user.input';

export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async add(newUser: AddUserInput) : Promise<User> {
    const user = new this.userModel();
    user.email = newUser.email;
    user.password = newUser.password;//need to change it later to set hash
    user.userName = newUser.userName;

    return await user.save();
  }
}
