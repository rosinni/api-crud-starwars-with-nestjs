import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanetController } from './planet/planet.controller';
import { CharacterController } from './character/character.controller';
import { UserController } from './user/user.controller';
import { DatabaseModule } from './database/database.module';



@Module({
  imports: [DatabaseModule],
  controllers: [AppController, PlanetController, CharacterController, UserController],
  providers: [AppService],
})
export class AppModule {}
