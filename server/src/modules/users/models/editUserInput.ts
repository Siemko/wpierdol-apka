import { Field, ID, InputType } from 'type-graphql';
import { ObjectId } from 'bson';

@InputType()
export class EditUserInput {
  @Field(() => ID)
  readonly _id: ObjectId;

  @Field()
  userName: string;

  @Field()
  email: string;
}
