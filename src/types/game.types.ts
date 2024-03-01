export type GameType = {
    id: string;
    nome: string;
    categoria: string;
    urlGame: string;
    urlVideo?: string;
    urlImage: string;
}

export type GameListType = {
    id?: string;
    nome: string;
    categoria?: string;
    urlGame?: string;
    urlVideo?: string;
    urlImage: string;
}