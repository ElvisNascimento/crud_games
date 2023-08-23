import { Inject, Injectable } from '@nestjs/common';
import { Game } from './interfaces/game.interface';
import { Model } from 'mongoose';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {
  constructor(
    @Inject('GAME_MODEL')
    private gameModel: Model<Game>,
  ) {}

  async create(createGameDto: CreateGameDto): Promise<Game> {
    const createdGame = new this.gameModel(createGameDto);
    return await createdGame.save();
  }

  async findAll() {
    return await this.gameModel.find().exec();
  }

  async findOne(id: string) {
    return await this.gameModel.findById(id).exec();
  }

  async update(id: string, game: UpdateGameDto) {
    this.gameModel.updateOne({ _id: id }, game).exec();
    return await this.gameModel.findById(id);
  }

  async remove(id: string) {
    return await this.gameModel.deleteOne({ _id: id }).exec();
  }
}
