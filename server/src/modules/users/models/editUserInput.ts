import { Field, InputType } from 'type-graphql';
import { ObjectId } from 'bson';
import { ObjectIdScalar } from 'src/modules/common/GraphQLScalars/ObjectIdScalar';

@InputType()
export class EditUserInput {
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field({ nullable: true })
  userName?: string;

  @Field({ nullable: true })
  email?: string;
}
