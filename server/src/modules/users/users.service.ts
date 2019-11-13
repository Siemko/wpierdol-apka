import { ReturnModelType } from '@typegoose/typegoose';
import { User } from './models/user';
import { InjectModel } from '@nestjs/mongoose';
import { AddUserInput } from './models/addUserInput';
import { Injectable } from '@nestjs/common';
import { UpdateUserInput } from './models/updateUserInput';

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

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }

  async update(id: string, dto: UpdateUserInput): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) 
      throw new Error(`There is no user with id "${id}"`);
    
    if (dto.email)
      user.email = dto.email;
    if (dto.userName)
      user.userName = dto.userName;
    if (dto.password)
      user.password = dto.password;//add hash functions later

    return user.save();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) 
      throw new Error(`There is no user with id "${id}"`);
      
    return this.userModel.findById(id);
  }
}
