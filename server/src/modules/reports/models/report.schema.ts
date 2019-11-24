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

  @Field(() => ObjectIdScalar, { nullable: true })
  @Property({ ref: User })
  author: ObjectId;

  @Field()
  @Property({ required: true })
  description: string;

}

export const ReportSchema: Schema<typeof Report> = buildSchema(Report);
