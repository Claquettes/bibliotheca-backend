import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auteur } from './auteur.entity';

@Injectable()
export class AuteursService {
  constructor(
    @InjectRepository(Auteur)
    private readonly auteurRepository: Repository<Auteur>,
  ) {}

  findAll(): Promise<Auteur[]> {
    return this.auteurRepository.find();
  }

  findOne(id: number): Promise<Auteur> {
    return this.auteurRepository.findOne({ where: { id } });
  }

  create(auteur: Partial<Auteur>): Promise<Auteur> {
    const newAuteur = this.auteurRepository.create(auteur);
    return this.auteurRepository.save(newAuteur);
  }

  update(id: number, auteur: Partial<Auteur>): Promise<Auteur> {
    return this.auteurRepository.save({ ...auteur, id });
  }

  remove(id: number): Promise<void> {
    return this.auteurRepository.delete(id).then(() => {});
  }
}
