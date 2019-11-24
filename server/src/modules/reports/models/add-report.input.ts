import { Field, InputType } from 'type-graphql';
import { ObjectIdScalar } from '../../common/graphql-scalars/object-id.scalar';
import { ObjectId } from 'bson';

@InputType()
export class AddReportInput {
  @Field()
  title: string;

  @Field(() => ObjectIdScalar, { nullable: true })
  author: ObjectId;

  @Field()
  description: string;
}
