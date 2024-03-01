import React from "react";


type CardProps = React.ComponentProps<"figure"> & {
    key: string;
    nome: string;
    categoria?: string;
    urlGame?: string;
    urlVideo?: string;
    urlImage: string;
}

const Card = ({key, nome, urlImage,...props}: CardProps) => {

    return <figure{...props} key={key}>
    <img src={urlImage} alt={nome} />
    <figcaption>{nome}</figcaption>
    </figure>

}

export default Card