import { Field, InputType, ID } from 'type-graphql';

@InputType()
export class EditUserInput {
  @Field(() => ID)
  readonly _id: string;

  @Field()
  userName: string;

  @Field()
  email: string;
}
