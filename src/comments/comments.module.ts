import { Module } from "@nestjs/common";
import { BookCommentsService } from "./comments.service";
import { MongooseModule } from "@nestjs/mongoose";
import { BookCommentSchema, Comment } from "./dto/comments.schema";
import { BookCommentsController } from './comments.controller';

@Module({
  controllers: [BookCommentsController],
  providers: [BookCommentsService],
  imports: [
    MongooseModule.forFeature([
      { name: Comment.name, schema: BookCommentSchema },
    ]),
  ],
})
export class BookCommentsModule {}
