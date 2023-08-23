export class CreateGameDto {
  id: number;
  nome: string;
  descricao: string;
  dataLancamento: Date;
  website: string;
  desenvolvedor: string;
  genero: string;
  urlCapa: string;
  consoles: object[];
}
