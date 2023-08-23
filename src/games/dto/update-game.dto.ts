import { PartialType } from '@nestjs/mapped-types';
import { CreateGameDto } from '../dto/create-game.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {}
