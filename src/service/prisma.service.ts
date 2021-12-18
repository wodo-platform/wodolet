import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      datasources: {
        db: {
          url: "mysql://wodo-test:wodo123@local.dev.com:30006/wodo-test-db",
        },
      },
    });
  }

  async onModuleInit() {
    try {

      await this.$connect();
    } catch (e) {
      console.log(e)
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
