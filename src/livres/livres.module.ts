import { Module } from '@nestjs/common';
import { LivresService } from './livres.service';
import { LivresController } from './livres.controller';

@Module({
  providers: [LivresService],
  controllers: [LivresController]
})
export class LivresModule {}
