import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livre } from './livre.entity';

@Injectable()
export class LivresService {
  constructor(
    @InjectRepository(Livre)
    private livresRepository: Repository<Livre>,
  ) {}

  findAll(): Promise<Livre[]> {
    return this.livresRepository.find({ relations: ['categorie', 'auteur'] });
  }

  findOne(id: number): Promise<Livre> {
    return this.livresRepository.findOne({ where: { id }, relations: ['categorie', 'auteur'] });
  }

  async create(livre: Livre): Promise<Livre> {
    return this.livresRepository.save(livre);
  }

  async delete(id: number): Promise<void> {
    await this.livresRepository.delete(id);
  }
}
