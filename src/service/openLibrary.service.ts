import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class OpenLibraryService {
  constructor(private readonly httpService: HttpService) {}
  baseUrl = 'https://openlibrary.org/';

  async getListBySubject(subject: string): Promise<any> {
    const url = `${this.baseUrl}subjects/${subject}.json`;
    const req = await this.httpService.axiosRef.get(url);
    return req;
  }

  async getBookByWorks(worksId: string): Promise<any> {
    const url = `${this.baseUrl}works/${worksId}.json`;
    const req = await this.httpService.axiosRef.get(url);
    if (!req.data) {
      throw new HttpException('Book Not Found!', HttpStatus.BAD_REQUEST);
    }
    return req;
  }

  async getAuthor(authorId: string): Promise<any> {
    const url = `${this.baseUrl}authors/${authorId}.json`;
    const req = await this.httpService.axiosRef.get(url);
    return req;
  }
}
