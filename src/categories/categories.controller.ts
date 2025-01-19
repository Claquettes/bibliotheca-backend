import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Categorie } from './categorie.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll(): Promise<Categorie[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Categorie> {
    return this.categoriesService.findOne(id);
  }

  @Post()
  create(@Body() categorie: Partial<Categorie>): Promise<Categorie> {
    return this.categoriesService.create(categorie);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() categorie: Partial<Categorie>): Promise<Categorie> {
    return this.categoriesService.update(id, categorie);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.categoriesService.remove(id);
  }
}
