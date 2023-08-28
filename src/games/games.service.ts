import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateDevDto, CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { IConsole, IDev, IGame } from './Interface/game.interface';


@Injectable()
export class GamesService {
  constructor(
    @Inject('GAME_MODEL')
    private gameModel: Model<IGame>,
    @Inject('DEV_MODEL')
    private devModel: Model<IDev>,
    @Inject('CONSOLE_MODEL')
    private consolesModel: Model<IConsole>,
  ) { }

  async createGame(createGameDto: CreateGameDto): Promise<IGame> {
    // Verificar se o desenvolvedor já existe
    const developerExists = await Promise.all(
      createGameDto.desenvolvedor.map(async devsId => {
        const existingDevs = await this.devModel.findById(devsId._id).exec();
        console.log(existingDevs);
      })
    );


    // Verificar se os consoles já existem
    const existingConsoles = await Promise.all(
      createGameDto.consoles.map(async consoleId => {
        const consoleExists = await this.consolesModel.findById(consoleId._id).exec();
        console.log(consoleExists);
        return consoleExists;
      })
    );

    // Se o desenvolvedor não existe ou algum console não existe, solicitar informações
    if (!developerExists || existingConsoles.some(consoleExists => !consoleExists)) {
      throw new NotFoundException('Desenvolvedor ou consoles não encontrados. Preencha as informações necessárias.');
    }

    // Criar o novo jogo
    const createdGame = new this.gameModel(createGameDto);
    return await createdGame.save();
  }

  async findAll() {
    const games = await this.gameModel.find()
    // .populate({path: 'desenvolvedor', select: 'nome'})
    // .populate('consoles')
    .exec();
    if(!games) {
      throw new NotFoundException(`Não há games!`);
    }
    return games;
  }

  async findOne(id: string) {
    const game = await this.gameModel.findById(id).exec();

    if(!game) {
      throw new NotFoundException(`O game com o Id ${id} nao foi encontrado!`)
    }
    return game;
  }

  async update(id: string, game: UpdateGameDto) {
    this.gameModel.updateOne({ _id: id }, game).exec();
    return ` O Game ${game.nome} Foi Atualizado com sucesso!`;
  }

  async remove(id: string): Promise<string> {
    if (!id) {
      return `ID inválido. Não é possível excluir o jogo.`;
    }
  
    const gameToRemove = await this.gameModel.findById(id).exec();
  
    if (!gameToRemove) {
      return `O jogo com o ID ${id} não existe.`;
    }
  
    await this.gameModel.deleteOne({ _id: id }).exec();
  
    return `O jogo ${gameToRemove.nome} foi excluído com sucesso.`;
  }
  
}
