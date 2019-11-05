import { InputType, Field } from 'type-graphql';

@InputType()
export class AddUserInput {
  @Field({ nullable: false })
  userName: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  password: string;
}
