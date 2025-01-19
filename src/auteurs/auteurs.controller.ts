import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AuteursService } from './auteurs.service';
import { Auteur } from './auteur.entity';

@Controller('auteurs')
export class AuteursController {
  constructor(private readonly auteursService: AuteursService) {}

  @Get()
  findAll(): Promise<Auteur[]> {
    return this.auteursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Auteur> {
    return this.auteursService.findOne(id);
  }

  @Post()
  create(@Body() auteur: Partial<Auteur>): Promise<Auteur> {
    return this.auteursService.create(auteur);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() auteur: Partial<Auteur>): Promise<Auteur> {
    return this.auteursService.update(id, auteur);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.auteursService.remove(id);
  }
}
