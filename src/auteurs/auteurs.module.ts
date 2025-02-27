import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuteursController } from './auteurs.controller';
import { AuteursService } from './auteurs.service';
import { Auteur } from './auteur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auteur])],
  controllers: [AuteursController],
  providers: [AuteursService],
  exports: [AuteursService],
})
export class AuteursModule {}
