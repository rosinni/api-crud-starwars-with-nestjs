import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from '../user/user.entity';
import {Character} from '../character/character.entity';
import {Planet} from '../planet/planet.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'starwars_db',
      entities: [User,Character,Planet],
      synchronize: true,
      logging: 'all'
    }),
  ],
})
export class DatabaseModule {}