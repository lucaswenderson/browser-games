import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { FormEvent } from "react";
import findCategory from "../utils/findCategory.utils";
import { GameType } from "../types/game.types";
import { v4 as uuid } from "uuid";
import findGame from "../utils/findGame.utils";

const FormRegisterGame = () => {

    const registerGame = (game: GameType) => {
        const localGames = localStorage.getItem("gameList")
        let gameList: GameType[] = []

        if(localGames){
            gameList = gameList.concat(JSON.parse(localGames))
        }

        gameList.push(game)
        localStorage.setItem("gameList", JSON.stringify(gameList))
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const values: {[key:string]: string} = {}
   

        formData.forEach((value,key)=>{
            values[key] = value.toString()

        })

        const categoryIsAlreadyExists = findCategory(values.categoria)

        if(!categoryIsAlreadyExists){
            alert(`a categoria ${values.categoria} não esta cadastrada no sistema`)
        }

        const newGame: GameType ={
            id: uuid(),
            nome: values.nome,
            categoria: values.categoria,
            urlGame: values.urlGame,
            urlVideo: values.urlVideo,
            urlImage: values.urlImage
        }

        const gameAlreadyExists = findGame(newGame)

        if(gameAlreadyExists){
            alert(`O jogo ${newGame.nome} já esta cadastrado no sistema`)
        }else if(categoryIsAlreadyExists && !gameAlreadyExists){
            registerGame(newGame)
            alert(`O jogo ${newGame.nome} foi cadastrado com sucesso`)
        }
    }

  return (
    <div className="formRegisterGame">
        <h2 className="formRegisterGame__title">Jogos</h2>
      <Form className="formRegisterGame__form" onSubmit={submitHandler}>
        <Input className="formRegisterGame__input" name="nome" type="text" placeholder="nome" required />
        <Input className="formRegisterGame__input" name="categoria" type="text" placeholder="categoria" required />
        <Input className="formRegisterGame__input" name="urlGame" type="text" placeholder="url do jogo" required />
        <Input className="formRegisterGame__input" name="urlVideo" type="text" placeholder="url do video" />
        <Input className="formRegisterGame__input" name="urlImage" type="text" placeholder="url da imagem" required />
        <Button className="formRegisterGame__button" type="submit">CADASTRAR</Button>
      </Form>
    </div>
  );
};

export default FormRegisterGame;
