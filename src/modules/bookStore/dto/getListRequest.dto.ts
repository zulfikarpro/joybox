import { Optional } from '@nestjs/common';

class GetListRequest {
  @Optional()
  genre?: string;
}
