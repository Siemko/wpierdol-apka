import { Field, InputType } from 'type-graphql';
import { ObjectId } from 'bson';
import { ObjectIdScalar } from '../../common/graphql-scalars/object-id.scalar';

@InputType()
export class AddReportInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => ObjectIdScalar)
  user: ObjectId;
}
