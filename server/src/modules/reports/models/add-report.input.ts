import { Field, InputType } from 'type-graphql';
import { ObjectId } from 'bson';

@InputType()
export class AddReportInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  reportedBy: ObjectId;
}
