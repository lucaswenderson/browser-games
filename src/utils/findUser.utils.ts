import { UserTypes } from "../types/user.types"
import { admUsers } from "../mocks/users.mock"

export const findUser = (user: UserTypes) => {
  const listaAtual = localStorage.getItem('listaUsuarios')
  let listaUsuarios: UserTypes[] = []

  if (listaAtual) {
    listaUsuarios = JSON.parse(listaAtual)
  }

  if (!listaUsuarios || listaUsuarios.length < 1) {
    return false
  }

  listaUsuarios = listaUsuarios.concat(admUsers)

  const emailAreadyExists = listaUsuarios.find((users) => users.email === user.email)

  if (emailAreadyExists) {
    return `O e-mail ${emailAreadyExists.email} já está cadastrado em nosso sistema`
  } else {
    return false
  }
}
