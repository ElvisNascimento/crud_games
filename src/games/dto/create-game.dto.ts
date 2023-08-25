export class CreateGameDto {
  nome: string;
  descricao: string;
  dataLancamento: Date;
  website: string;
  desenvolvedor: string;
  genero: string;
  urlCapa: string;
  consoles: object[];
}
export class CreateDevDto {
  nome: string;
    dataFundacao: string;
    website: string;
    sede: string;
}
export class CreateConsoleDto {
  codigo: number;
  nome: string;
  dataLancamento: string;
  empresa: string;
}
