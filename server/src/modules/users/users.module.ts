import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { CommonModule } from '../common/common.module';

const services = [UsersService];
const resolvers = [UsersResolver];

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    CommonModule,
  ],
  providers: [...services, ...resolvers],
})
export class UsersModule { }
