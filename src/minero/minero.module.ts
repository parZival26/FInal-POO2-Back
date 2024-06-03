import { Module } from '@nestjs/common';
import { MineroController } from './minero.controller';
import { MineroService } from './minero.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MineroController],
  providers: [MineroService, PrismaService]
})
export class MineroModule { }
