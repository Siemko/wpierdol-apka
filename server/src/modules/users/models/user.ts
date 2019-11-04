import { ObjectType, Field, ID } from 'type-graphql';
import { prop, buildSchema } from '@typegoose/typegoose';
import { Schema } from 'mongoose';

@ObjectType()
export class User {
  @Field(() => ID)
  readonly _id: string;

  @Field({ nullable: false })
  @prop({ required: true })
  userName: string;

  @Field({ nullable: false })
  @prop({ required: true })
  email: string;

  @Field({ nullable: false })
  @prop({ required: true })
  password: string;
}

export const UserSchema: Schema<typeof User> = buildSchema(User);
