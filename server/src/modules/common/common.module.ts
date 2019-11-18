import { Module } from '@nestjs/common';
import { ObjectIdScalar } from './GraphQLScalars/ObjectIdScalar';

@Module({
  providers: [ObjectIdScalar],
})
export class CommonModule { }
