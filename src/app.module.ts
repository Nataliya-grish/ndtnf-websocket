import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtStrategy } from './auth/strategy/jwt.strategy';
import { BookCommentsModule } from "./comments/comments.module";
import { CommentsGateway } from './comments/comments.gateway';

@Module({
  imports: [
	AuthModule,
    UserModule,
	BooksModule,
	BookCommentsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION),
	],
  controllers: [AppController],
  providers: [AppService, JwtStrategy, CommentsGateway],
})
export class AppModule {}
