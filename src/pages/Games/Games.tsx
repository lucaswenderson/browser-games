import MenuAdmIsLogged from "../../components/MenuAdmIsLogged"
import MenuIsLogged from "../../components/MenuIsLogged"
import GameList from "../../components/GameList"
import { gameListMock } from "../../mocks/games.mock"
import { useState } from "react"
import { GameType } from "../../types/game.types"
import Input from "../../components/Input"
import { ChangeEvent } from "react"

const Games = () => {

    const userInStorage = localStorage.getItem("loggedUser")
    let user 
    if(userInStorage){
        user = JSON.parse(userInStorage)
    }

    const [list, setList] = useState<GameType[]>([])
    const [search, setSearch] = useState<string>("")

    const initializedList = () =>{
        const storageList = localStorage.getItem("gameList")
        let gameList: GameType[] = [...gameListMock]
    
        if(storageList){
            gameList = gameList.concat(JSON.parse(storageList))
        }

        setList(gameList)
    }

    if(list.length < 1){
        initializedList()
    }

    const handleStorage = (e: StorageEvent) =>{
        e.preventDefault()

        if(e.key === "gameList"){
            let parseList:GameType[] = []
            parseList = JSON.parse(localStorage.getItem("gameList") || "")
            setList(parseList)
        }
    }

    window.addEventListener("storage", handleStorage)

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>{ 
        e.preventDefault()

        setSearch(e.target.value)

        const searchList = list.filter((game) => 
            game.nome.toLowerCase().includes(search.toLowerCase())
            || game.categoria.toLowerCase().includes(search.toLowerCase())
        )

        if(e.target.value === ""){
            const localList = JSON.parse(localStorage.getItem("gameList") || "")
            setList(localList)
        }else if(e.target.value !== "" && searchList.length === 0){
            setList([])
        }else{
            setList(searchList)
        }
    }

    return (
    <div className="games">
        {
            user.isAdm ? <MenuAdmIsLogged /> : <MenuIsLogged />
        }
        <div className="games__search">
            <Input className="games__search__input" value={search} onChange={handleSearch} type="text" name="search" placeholder="pesquisar jogo" />

        </div>
        <h2 className="games__title">Avalie os seus games favoritos</h2>
        <GameList list={list} className="cardList" />
    </div>
    
    )
}

export default Games
