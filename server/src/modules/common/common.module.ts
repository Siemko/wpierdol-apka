import { Module } from '@nestjs/common';
import { ObjectIdScalar } from './GraphGLScalars/ObjectIdScalar';


@Module({
  providers: [ObjectIdScalar],
})
export class CommonModule { }
