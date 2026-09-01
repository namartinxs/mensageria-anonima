import { Module } from '@nestjs/common';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { MessagesModule } from './messages/messages.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, MessagesModule, ThrottlerModule.forRoot([{ ttl: 60000, limit: 5 }])],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule { }
