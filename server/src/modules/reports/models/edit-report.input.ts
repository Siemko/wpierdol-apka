import { Field, InputType } from 'type-graphql';
import { ObjectId } from 'bson';
import { ObjectIdScalar } from '../../common/graphql-scalars/object-id.scalar';

@InputType()
export class EditReportInput {
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field()
  title: string;

  @Field()
  description: string;
}
