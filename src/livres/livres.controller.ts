import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { LivresService } from './livres.service';
import { Livre } from './livre.entity';

@Controller('livres')
export class LivresController {
  constructor(private readonly livresService: LivresService) {}

  @Get()
  findAll(): Promise<Livre[]> {
    return this.livresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Livre> {
    return this.livresService.findOne(id);
  }

  @Post()
  create(@Body() livre: Livre): Promise<Livre> {
    console.log("Create livre", livre);
    return this.livresService.create(livre);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() livre: Partial<Livre>): Promise<Livre> {
    console.log(`Updating book with ID ${id}`, livre);
    return this.livresService.update(id, livre);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.livresService.remove(id);
  }
}
