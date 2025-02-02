import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './Users/user.module';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath : '.env',
    isGlobal : true
  }),
  MongooseModule.forRoot(process.env.MONGO_URI),
  TodoModule,
  AuthModule,
  UserModule
  ],
  
})
export class AppModule {}
