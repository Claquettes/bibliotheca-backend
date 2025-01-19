import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Livre } from '../livres/livre.entity';

@Entity()
export class Categorie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  libelle: string;

  @OneToMany(() => Livre, livre => livre.categorie)
  livres: Livre[];
}
