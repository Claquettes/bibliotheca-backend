import { Module } from '@nestjs/common';
import { AuteursService } from './auteurs.service';
import { AuteursController } from './auteurs.controller';

@Module({
  providers: [AuteursService],
  controllers: [AuteursController]
})
export class AuteursModule {}
