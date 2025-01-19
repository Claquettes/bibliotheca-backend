import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categorie } from './categorie.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categorie)
    private readonly categorieRepository: Repository<Categorie>,
  ) {}

  findAll(): Promise<Categorie[]> {
    return this.categorieRepository.find();
  }

  findOne(id: number): Promise<Categorie> {
    return this.categorieRepository.findOne({ where: { id } });
  }

  create(categorie: Partial<Categorie>): Promise<Categorie> {
    const newCategorie = this.categorieRepository.create(categorie);
    return this.categorieRepository.save(newCategorie);
  }

  update(id: number, categorie: Partial<Categorie>): Promise<Categorie> {
    return this.categorieRepository.save({ ...categorie, id });
  }

  remove(id: number): Promise<void> {
    return this.categorieRepository.delete(id).then(() => {});
  }
}
