import { ReturnModelType } from '@typegoose/typegoose';
import { User } from './models/user';
import { InjectModel } from '@nestjs/mongoose';

export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

}
