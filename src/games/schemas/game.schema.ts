import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';


export const ConsoleSchema = new mongoose.Schema({
  codigo: Number,
  nome: String,
  dataLancamento: String,
  empresa: String,
});


export const DevSchema = new mongoose.Schema({
  nome: String,
  dataFundacao: String,
  website: String,
  sede: String,
});

export const GameSchema = new mongoose.Schema({
  // _id: Schema.Types.ObjectId,
  nome: String,
  descricao: String,
  dataLancamento: String,
  website: String,
  desenvolvedor: String,
  genero: String,
  urlCapa: String,
  consoles: Array<any>
});

const Dev = mongoose.model('Dev', DevSchema);
const Consoles = mongoose.model('Consoles', ConsoleSchema);
const Game = mongoose.model('Game', GameSchema);
