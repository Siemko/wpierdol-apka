import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class TokenModel {
  @Field()
  token: string;
}
