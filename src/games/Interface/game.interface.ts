export interface IConsole {
  codigo: number,
  nome: string,
  dataLancamento: string,
  empresa: string,
}
export interface IDev {
    nome: string,
    dataFundacao: string,
    website: string,
    sede: string,
}
export interface IGame {
  nome: string,
  descricao: string,
  dataLancamento: string,
  website: string,
  desenvolvedor: string,
  genero: string,
  urlCapa: string,
  consoles: Array<any>,
}