import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Get,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindById } from '@common/types';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto, FindAllResponse, GetAllParamsDto } from './dto';
import { Transaction } from '@/modules/transaction/dto/schema/create-transaction';
import {CreateCategoryDto} from "@/modules/category/dto";
@ApiTags('transaction')
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @ApiOperation({ summary: 'Create transaction' })
  @Post('/')
  createTransaction(@Body() body: CreateTransactionDto): Promise<Transaction> {
    return this.transactionService.create(body);
  }

  @ApiOperation({ summary: 'Delete transaction by id' })
  @Delete('/:id')
  deleteTransaction(@Param() params: FindById): Promise<void> {
    return this.transactionService.delete(params.id);
  }

  @ApiOperation({ summary: 'Find all transactions' })
  @ApiResponse({ type: [FindAllResponse] })
  @Get('/')
  getAllTransactions(@Query() params: GetAllParamsDto): Promise<Transaction[]> {
    return this.transactionService.findAll(params);
  }
}
