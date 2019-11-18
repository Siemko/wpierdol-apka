import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { ObjectId } from 'bson';

@Scalar('ObjectId')
export class ObjectIdScalar implements CustomScalar<string, ObjectId> {
  description = 'Mongo object id scalar type';

  parseValue(value: string): ObjectId {
    return new ObjectId(value);
  }

  serialize(value: ObjectId): string {
    return value.toHexString();
  }

  parseLiteral(ast: ValueNode): ObjectId {
    if (ast.kind === Kind.STRING) {
      return new ObjectId(ast.value);
    }
    return null;
  }
}