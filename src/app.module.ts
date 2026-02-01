import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { TransactionModule } from './transaction/transaction.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), AuthModule, TransactionModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
