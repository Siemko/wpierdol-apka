import { buildSchema, prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'bson';
import { Schema } from 'mongoose';
import { Field, ObjectType } from 'type-graphql';
import { ObjectIdScalar } from '../../common/graphql-scalars/object-id.scalar';
import { User } from '../../users/models/user.schema';

@ObjectType()
export class Report {
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  title: string;

  @Field()
  @Property({ required: true })
  description: string;

  @Field(() => User, { nullable: true })
  @Property({ ref: User, required: false })
  user?: ObjectId | User;
}

export const ReportSchema: Schema<typeof Report> = buildSchema(Report);
