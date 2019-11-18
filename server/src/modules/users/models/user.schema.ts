import { buildSchema, prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'bson';
import { Schema } from 'mongoose';
import { Field, ObjectType } from 'type-graphql';
import { ObjectIdScalar } from '../../common/graphql-scalars/object-id.scalar';

@ObjectType()
export class User {
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  userName: string;

  @Field()
  @Property({ required: true })
  email: string;

  @Field()
  @Property({ required: true })
  password: string;

  @Field()
  @Property({ref: User})
  child: ObjectId;
}

export const UserSchema: Schema<typeof User> = buildSchema(User);
