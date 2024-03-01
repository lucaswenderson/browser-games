import { Link } from "react-router-dom"

const Home = () => {

    return (<div>
        <h1>Home</h1>
        <Link to="/login"><button>Já tenho cadastro</button></Link>
        <Link to="/register"><button>SOu novo aqui</button></Link>
    </div>)
}

export default Home