import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivresModule } from './livres/livres.module';
import { AuteursModule } from './auteurs/auteurs.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Change if using PostgreSQL
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'a69',
      database: 'bibliotheca',
      autoLoadEntities: true,
      synchronize: true, // Disable in production
    }),
    LivresModule,
    AuteursModule,
    CategoriesModule,
  ],
})
export class AppModule {}
