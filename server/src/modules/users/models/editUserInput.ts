import { Field, InputType } from 'type-graphql';
import { ObjectId } from 'bson';
import { ObjectIdScalar } from 'src/modules/common/GraphQLScalars/ObjectIdScalar';

@InputType()
export class EditUserInput {
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field()
  userName: string;

  @Field()
  email: string;
}
