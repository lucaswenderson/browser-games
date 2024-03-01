import Menu from "./Menu";
import { Link } from "react-router-dom";

const MenuAdmIsLogged = () => {

    return(
        <Menu className="menu">
            <div className="menu__option">Perfil</div>
            <Link to="/games">
            <div className="menu__option">Jogos</div>
            </Link>
            <div className="menu__option">Sobre Nós</div>
            <Link to="/manage">
            <div className="menu__option">Gerenciar</div>
            </Link>
        </Menu>
    )
}

export default MenuAdmIsLogged