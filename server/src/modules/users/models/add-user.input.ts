import { Field, InputType } from 'type-graphql';

@InputType()
export class AddUserInput {
  @Field()
  userName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
