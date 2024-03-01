import React from "react";
import Card from "./Card";
import { GameType } from "../types/game.types";

type GameListProps = React.ComponentProps<"ul"> & {
    list: GameType[]
}



const GameList = ({list, ...props}: GameListProps) => {


    return (
        
        <ul {...props}>
            {list.map((game) => (
                <li key={game.id}>
                    <Card
                        key={game.id}
                        nome={game.nome}
                        urlImage={game.urlImage}
                        className="cardList__card"
                    />
                </li>
            ))}
        </ul>
    );

}

export default GameList