import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from "@nestjs/websockets";
import { BookCommentsService } from "./comments.service";
import { CommentsDto } from "./dto/comments.dto";

@WebSocketGateway({ cors: true })
export class CommentsGateway {
  private readonly bookCommentsService: BookCommentsService;

  @SubscribeMessage("all-comments")
  getAllComments(@MessageBody("bookId") bookId: string) {
    return this.bookCommentsService.findAllBookComments(bookId);
  }

  @SubscribeMessage("add-comment")
  addComment(@MessageBody() comment: CommentsDto) {
    return this.bookCommentsService.create(comment);
  }
}