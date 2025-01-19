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
    return this.livresRepository.find();
  }

  findOne(id: number): Promise<Livre> {
    return this.livresRepository.findOne({ where: { id } });
  }

  async create(livre: Partial<Livre>): Promise<Livre> {
    const newLivre = this.livresRepository.create(livre);
    return this.livresRepository.save(newLivre);
  }

  async update(id: number, livre: Partial<Livre>): Promise<Livre> {
    await this.livresRepository.update(id, livre);
    return this.findOne(id); // Return updated book
  }

  async remove(id: number): Promise<void> {
    await this.livresRepository.delete(id);
  }
}
