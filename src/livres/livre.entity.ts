import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categorie } from '../categories/categorie.entity';
import { Auteur } from '../auteurs/auteur.entity';

@Entity()
export class Livre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  libelle: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  nbPage: number;

  @Column({ nullable: true })
  image: string;

  @ManyToOne(() => Categorie, (categorie) => categorie.livres)
  categorie: Categorie;

  @ManyToOne(() => Auteur, (auteur) => auteur.livres)
  auteur: Auteur;
}
