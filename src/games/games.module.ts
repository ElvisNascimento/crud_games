import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { DatabaseModule } from 'src/database.module';
import { GamesProviders } from './model/game.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [GamesController],
  providers: [GamesService, ...GamesProviders],
})
export class GamesModule {}
