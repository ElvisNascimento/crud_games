import { Connection } from 'mongoose';
import { DevSchema } from '../schemas/desenvolvedor.schema';
import { ConsolesSchema } from '../schemas/consoles.schema';
import { GameSchema } from '../schemas/game.schema';

export const GamesProviders = [
  {
    provide: 'GAME_MODEL',
    useFactory: (connection: Connection) => connection.model('Game', GameSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'DEV_MODEL',
    useFactory: (connection: Connection) => connection.model('Dev', DevSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'CONSOLE_MODEL',
    useFactory: (connection: Connection) => connection.model('Console', ConsolesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
