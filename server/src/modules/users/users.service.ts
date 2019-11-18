import { ReturnModelType } from '@typegoose/typegoose';
import { User } from './models/user';
import { InjectModel } from '@nestjs/mongoose';
import { AddUserInput } from './models/addUserInput';
import { Injectable, Scope } from '@nestjs/common';
import { EditUserInput } from './models/editUserInput';
import { ObjectId } from 'bson';

@Injectable({
  scope: Scope.DEFAULT,
})
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

  async edit(dto: EditUserInput): Promise<User> {
    const user = await this.userModel.findById(dto._id);

    Object.assign(user, dto);

    return user.save();
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new Error('There is no user to delete');
    }
    await user.remove();
    return id;
  }
}
