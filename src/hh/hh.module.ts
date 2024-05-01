import { Module } from '@nestjs/common';
import { HhService } from './hh.service';
import { HhController } from './hh.controller';

@Module({
  providers: [HhService],
  controllers: [HhController]
})
export class HhModule {}
