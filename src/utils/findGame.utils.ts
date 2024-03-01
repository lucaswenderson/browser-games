import { GameType } from "../types/game.types";
import { gameListMock } from "../mocks/games.mock";

const findGame = (game: GameType) => {
    const localList = localStorage.getItem("gameList")
    let gameList = [...gameListMock]
    if(localList){
        gameList = gameList.concat(JSON.parse(localList))
    }
    const gameAlreadyExists = gameList.some((obj) => obj.nome === game.nome || obj.urlGame === game.urlGame)
    return gameAlreadyExists
}

export default findGame