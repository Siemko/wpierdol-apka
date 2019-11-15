import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { User } from './models/user';
import { AddUserInput } from './models/addUserInput';
import { UpdateUserInput } from './models/updateUserInput';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: ReturnModelType<typeof User>,
  ) {}

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

  async update(id: string, dto: UpdateUserInput): Promise<User> {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new Error(`Couldn’t find user with id ${id}`);
    }

    const updatedUser = Object.assign(user, dto);
    return updatedUser.save();
  }

  async remove(id: string): Promise<User> {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new Error(`Couldn’t find user with id ${id}`);
    }

    return user.remove();
  }
}
