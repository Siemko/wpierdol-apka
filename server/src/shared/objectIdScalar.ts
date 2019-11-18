import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { ObjectId } from 'bson';

@Scalar('ObjectId')
export class ObjectIdScalar implements CustomScalar<string, ObjectId> {
  description = 'ObjectId custom scalar type';

  parseValue(value: string): ObjectId {
    return new ObjectId(value); // value from the client
  }

  serialize(value: ObjectId): string {
    return value.toHexString(); // value sent to the client
  }

  parseLiteral(ast: ValueNode): ObjectId {
    if (ast.kind === Kind.STRING) {
      return new ObjectId(ast.value);
    }
    return null;
  }
}
