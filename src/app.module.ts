import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livre } from './livres/livre.entity';
import { Categorie } from './categories/categorie.entity';
import { Auteur } from './auteurs/auteur.entity';
import { LivresModule } from './livres/livres.module';
import { CategoriesModule } from './categories/categories.module';
import { CategoriesService } from './categories/categories.service';
import { CategoriesController } from './categories/categories.controller';
import { AuteursModule } from './auteurs/auteurs.module';
import { CatrgoriesModule } from './catrgories/catrgories.module';
import { CatrgoriesService } from './catrgories/catrgories.service';
import { CatrgoriesController } from './catrgories/catrgories.controller';
import { CategoriesModule } from './categories/categories.module';
import { AuteursModule } from './auteurs/auteurs.module';
import { LivresModule } from './livres/livres.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'a69',
      database: 'bibliotheca',
      entities: [Livre, Categorie, Auteur],
      synchronize: true,
    }),
    LivresModule,
    CategoriesModule,
    AuteursModule,
    CatrgoriesModule,
  ],
  controllers: [CatrgoriesController, CategoriesController],
  providers: [CatrgoriesService, CategoriesService],
})
export class AppModule {}
