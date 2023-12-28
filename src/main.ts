import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BookInterceptor } from './interceptor/interceptor';
import { ValidationBookPipe } from './validation/book.validation.pipe';
import { HttpExceptionFilter } from './filter/http.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new BookInterceptor());
  app.useGlobalPipes(new ValidationBookPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
	
  await app.listen(3000);
}
bootstrap();
