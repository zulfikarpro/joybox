import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { serialize } from 'class-transformer';
import { BookStoreService } from './bookStore.service';
import { CreateOrderRequest } from './dto/createOrderRequest.dto';

@Controller('/')
export class BookStoreController {
  constructor(private readonly bookStoreService: BookStoreService) {}

  @Get('genre/:subject')
  getBooks(@Param('subject') subject) {
    return this.bookStoreService.listBooks(subject);
  }

  @Post('createOrder')
  createOrder(@Body() createOrderRequest: CreateOrderRequest) {
    return this.bookStoreService.createOrder(createOrderRequest);
  }
}
