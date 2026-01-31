import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'generated/prisma/client';

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit {
    constructor(private readonly config: ConfigService) {
        const databaseUrl = config.get<string>('DATABASE_URL');

        if (!databaseUrl) {
            throw new Error('DATABASE_URL is not defined');
        }

        super({
            adapter: new PrismaPg({
                connectionString: databaseUrl,
            }),
        });
    }

    async onModuleInit() {
        await this.$connect();
    }
}
