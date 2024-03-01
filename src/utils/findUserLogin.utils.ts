import { LoginType } from "../types/login.types"
import { UserTypes } from "../types/user.types"
import { admUsers } from "../mocks/users.mock"

export const findUserLogin = (user: LoginType) =>{
  const listaAtual = localStorage.getItem('listaUsuarios')
  let listaUsuarios: UserTypes[] = []

  if(listaAtual){
    listaUsuarios = JSON.parse(listaAtual)
  }

  listaUsuarios = listaUsuarios.concat(admUsers)

  const findUser = listaUsuarios.find((users) => users.email === user.email)

  if(findUser){
    return findUser
  }else{
    return false
  }
}
