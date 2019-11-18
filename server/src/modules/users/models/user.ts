import { ObjectType, Field } from 'type-graphql';
import { prop, buildSchema } from '@typegoose/typegoose';
import { Schema } from 'mongoose';
import { ObjectId } from 'bson';
import { ObjectIdScalar } from 'src/modules/common/GraphQLScalars/ObjectIdScalar';

@ObjectType()
export class User {
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field()
  @prop({ required: true })
  userName: string;

  @Field()
  @prop({ required: true })
  email: string;

  @Field()
  @prop({ required: true })
  password: string;
}

export const UserSchema: Schema<typeof User> = buildSchema(User);
