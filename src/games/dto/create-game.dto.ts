export class CreateGameDto {
  _id: string;
  nome: string;
  descricao: string;
  dataLancamento: Date;
  website: string;
  desenvolvedor: CreateDevDto[];
  genero: string;
  urlCapa: string;
  consoles: CreateConsoleDto[];
}
export class CreateDevDto {
  _id: string;
  nome: string;
  dataFundacao: string;
  website: string;
  sede: string;
}
export class CreateConsoleDto {
  _id: string;
  codigo: number;
  nome: string;
  dataLancamento: string;
  empresa: string;
}
