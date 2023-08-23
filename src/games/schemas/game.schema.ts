import * as mongoose from 'mongoose';

export const Game = new mongoose.Schema({
  nome: String,
  descricao: String,
  dataLancamento: String,
  website: String,
  desenvolvedor: String,
  genero: String,
  urlCapa: String,
  consoles: Array<any>,
});
// {
//     "nome": "Call of Duty Ghost",
//     “descricao”: “Welcome to Call of Duty: Ghosts”
//     "dataLancamento": "2013-05-01",
//     "website": “https://www.callofduty.com/br/pt”
//     “desenvolvedor”: "Activision",
//     : “FPS”
//     “urlCapa”: “https://upload.wikimedia.org/Call_of_duty_ghosts_box_art.jpg”
//     “consoles”: [
//                   { codigo: 1 },
//                   { codigo: 2 },
//                 ]
//     }
