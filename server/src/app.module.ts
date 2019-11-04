import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join('src', 'schema.gql'),
      context: ({ req }) => ({ headers: req.headers }),
    }),
    MongooseModule.forRoot(`mongodb://mongo/wpierdol`),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
