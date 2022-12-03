import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OpenLibraryService } from '../../service/openLibrary.service';
import { BookStoreController } from './bookStore.controller';
import { BookStoreService } from './bookStore.service';

@Module({
  imports: [HttpModule],
  controllers: [BookStoreController],
  providers: [BookStoreService, OpenLibraryService],
})
export class BookStoreModule {}
