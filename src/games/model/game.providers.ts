import { Connection } from 'mongoose';
import { Game } from '../schemas/game.schema';

export const GamesProviders = [
  {
    provide: 'GAME_MODEL',
    useFactory: (connection: Connection) => connection.model('Game', Game),
    inject: ['DATABASE_CONNECTION'],
  },
];
