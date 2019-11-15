import { Field, InputType, ID } from 'type-graphql';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  userName?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;
}
