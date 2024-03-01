import Menu from "./Menu";
import { Link } from "react-router-dom";

const MenuIsLogged = () => {

    return(
        <Menu className="menu">
            <div className="menu__option">Perfil</div>
            <Link to="/games">
            <div className="menu__option">Jogos</div>
            </Link>
            <div className="menu__option">Sobre Nós</div>
        </Menu>
    )
}

export default MenuIsLogged