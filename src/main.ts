import { NestFactory } from '@nestjs/core';
import { GamesModule } from './games/games.module';

async function bootstrap() {
  const app = await NestFactory.create(GamesModule);
  await app.listen(3000);
}
bootstrap();
