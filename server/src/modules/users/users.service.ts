import { ReturnModelType } from '@typegoose/typegoose';
import { User } from './models/user';
import { InjectModel } from '@nestjs/mongoose';
import { AddUserInput } from './models/addUserInput';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: ReturnModelType<typeof User>,
  ) { }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async add(dto: AddUserInput): Promise<User> {
    const user = new this.userModel();
    user.userName = dto.userName;
    user.password = dto.password;
    user.email = dto.email;

    return user.save();
  }

  async delete(id: string) : Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }
}
