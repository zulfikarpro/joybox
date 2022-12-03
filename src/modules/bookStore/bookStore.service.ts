import { Injectable } from '@nestjs/common';
import { OpenLibraryService } from 'src/service/openLibrary.service';
import { CreateOrderRequest } from './dto/createOrderRequest.dto';

@Injectable()
export class BookStoreService {
  constructor(private readonly openLibraryService: OpenLibraryService) {}

  async listBooks(subject: string) {
    const req = await this.openLibraryService.getListBySubject(subject);
    console.log(req.data);
    return req.data;
  }

  async createOrder(createOrderRequest: CreateOrderRequest) {
    const { borrowTime, worksId, lengthOfBorrowDays } =
      createOrderRequest || {};
    const book = await this.findBook(worksId);
    const { title, authors, description } = book || {};
    const authorId = this.getAuthorId(authors[0]?.author?.key);
    const authorName = await this.findAuthor(authorId);
    const timeToReturn = this.getTimeToReturn(borrowTime, lengthOfBorrowDays);

    return { borrowTime, timeToReturn, authorName, title, description };
  }

  getTimeToReturn(orderTime, lengthOfBorrowDays) {
    const time = new Date(orderTime);
    const returnTime = time.setDate(time.getDate() + lengthOfBorrowDays);
    return new Date(returnTime);
  }

  getAuthorId(authors: string) {
    const splittedArray = authors.split('/');
    return splittedArray[splittedArray.length - 1];
  }

  async findBook(worksId: string) {
    const req = await this.openLibraryService.getBookByWorks(worksId);
    return req.data;
  }

  async findAuthor(authorId: string) {
    const req = await this.openLibraryService.getAuthor(authorId);
    return req?.data?.name;
  }
}
