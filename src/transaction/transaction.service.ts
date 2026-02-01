import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  create(createTransactionDto: CreateTransactionDto) {
    return '';
  }

  findAll() {
    return ``;
  }

  findOne(id: number) {
    return ``;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return ``;
  }

  remove(id: number) {
    return ``;
  }
}
