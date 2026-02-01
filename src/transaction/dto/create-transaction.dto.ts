import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsDateString } from 'class-validator';
import { MessagesValidators } from 'helpers/messagesValidators';

export class CreateTransactionDto {

    userId: number;

    @ApiProperty({
        example: 'income',
        description: 'Tipo da transação (income | expense)',
        required: true,
    })
    @IsNotEmpty({ message: MessagesValidators?.isNotEmpty })
    @IsString({ message: MessagesValidators?.isString })
    type: string;

    @ApiProperty({
        example: 150.75,
        description: 'Valor da transação',
        required: true,
    })
    @IsNotEmpty({ message: MessagesValidators?.isNotEmpty })
    @IsNumber({}, { message: MessagesValidators?.isNumber })
    amount: number;

    @ApiProperty({
        example: 'Pagamento de cliente',
        description: 'Descrição da transação',
        required: false,
    })
    @IsOptional()
    @IsString({ message: MessagesValidators?.isString })
    description?: string;

    @ApiProperty({
        example: '2026-02-01T10:30:00.000Z',
        description: 'Data da transação',
        required: true,
    })
    @IsNotEmpty({ message: MessagesValidators?.isNotEmpty })
    @IsDateString({}, { message: MessagesValidators?.isDate })
    date: string;
}
