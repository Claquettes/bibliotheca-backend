import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livre } from './livre.entity';

@Injectable()
export class LivresService {
  constructor(
    @InjectRepository(Livre)
    private readonly livreRepository: Repository<Livre>,
  ) {}

  async findAll(): Promise<Livre[]> {
    return this.livreRepository.find();
  }

  async findOne(id: number): Promise<Livre> {
    return this.livreRepository.findOne({ where: { id } });
  }

  async create(livre: Partial<Livre>): Promise<Livre> {
    const newLivre = this.livreRepository.create(livre);
    return this.livreRepository.save(newLivre);
  }

  async update(id: number, livre: Partial<Livre>): Promise<Livre> {
    await this.livreRepository.update(id, livre);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.livreRepository.delete(id);
  }
}
