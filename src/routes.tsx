import { createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home/Home"
import Games from "./pages/Games/Games"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Manage from "./pages/Manage/Manage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element:  <Register />
    },
    {
        path: "/games",
        element: <Games />
    },
    {
        path: "/manage",
        element: <Manage />
    }

])

export default router