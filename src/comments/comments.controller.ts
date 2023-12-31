import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CommentsDto } from "./dto/comments.dto";
import { CommentDocument } from "./dto/comments.schema";
import { BookCommentsService } from "./comments.service";

@Controller("books/comments")
export class BookCommentsController {
  constructor(private readonly bookCommentsService: BookCommentsService) {}

  @Post()
  async create(@Body() comment: CommentsDto): Promise<CommentDocument> {
    return await this.bookCommentsService.create(comment);
  }

  @Get(":id")
  async read(@Param("id") bookId: string): Promise<CommentDocument> {
    return await this.bookCommentsService.read(bookId);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() comment: CommentsDto,
  ): Promise<CommentDocument> {
    return await this.bookCommentsService.update(id, comment);
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<CommentDocument> {
    return await this.bookCommentsService.delete(id);
  }

  @Get("book/:bookId")
  async findAllBookComments(
    @Param("bookId") bookId: string,
  ): Promise<CommentDocument[]> {
    return await this.bookCommentsService.findAllBookComments(bookId);
  }
}