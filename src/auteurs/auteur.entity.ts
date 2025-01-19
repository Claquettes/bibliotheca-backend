import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Livre } from '../livres/livre.entity';

@Entity()
export class Auteur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenoms: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Livre, livre => livre.auteur)
  livres: Livre[];
}
