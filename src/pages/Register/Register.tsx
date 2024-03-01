import {UserTypes} from "../../types/user.types"
import { FormEvent } from "react";
import { findUser } from "../../utils/findUser.utils";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate()

 const registerUser = (user: UserTypes) => {
  const listaAtual = localStorage.getItem('listaUsuarios')
  let listaUsuarios = []

  if(listaAtual){
    listaUsuarios = JSON.parse(listaAtual)
  }
  
  localStorage.setItem('listaUsuarios', JSON.stringify([...listaUsuarios, user]))
 }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //haverão comentários nesta aplicação que pertencem a mim mesmo professor
    //deixei os comentários aqui porque vou precisar revisitar esse código, que é avançado para mim.

    const formData = new FormData(e.currentTarget)

    //FormData() é um método nativo do javascript.
    //ele é um constructor que facilita a criação de objetos chave/valor a partir de um formulário

    //quando uso o constructor formData ele pega todos os inputs do formulario e faz uma organização
    //ele pega todos os valores da tag "NAME" dos inputs e transformam em KEY
    //ele pega todos os values dos inputs e colocam como valor da KEY da sua tag

    const values: { [key: string]: string } = {};

    //values é uma constante que será um objeto
    //[key:string] diz que as chaves dessa constante sempre serão uma string
    //: string diz que o valor de todas as chaves também serão uma string
    //esta é uma anotação que pode ser utilizada no TypeScript puro

    formData.forEach((value, key) => {
      values[key] = value.toString();
    });

    //o forEach esta percorrendo todos os values dos inputs, e no parâmetro key percorre todos os valores da tag "name"
    //ele diz que values[key] (formData.name) será a chave e que seu valor será value (formData.value)
    //a cada loop do forEach ele passa por uma tag do form até chegar no ultimo input, que é o de país
    //o toString() no value é para garantir que o value passado para a chave será uma string sempre

    const newUser: UserTypes = {
      nome: values.nome,
      email: values.email,
      senha: values.senha,
      dataNascimento: new Date(values.dataNascimento),
      estado: values.estado,
      pais: values.pais,
      isAdm: false
    }
    //o objeto values criado a partir de formData não é compreendido como um UserTypes
    //como todos os valores das keys são string eu posso passar o valor de cada propriedade pro meu obj newUser
    //como o dataNascimento de values é entendido como uma string eu posso criar uma nova data a partir da data de tipo string que tenho no values
    //por padrão todos os usuários criados pelo "site" não serão administradores 
    
    const emailAlreadyExists = findUser(newUser)

    //findUser verifica se o email passado no cadastro já existe na lista
    //caso exista ele retorna uma mensagem dizendo que o email já esta cadastrado
    //caso o email não exista na lista a função acionará a função registerUser

    if(emailAlreadyExists){
      alert(emailAlreadyExists)
    }else{
      registerUser(newUser)
      alert("usuário cadastrado com sucesso")
      navigate("/login")
    //um novo obj do type UserTypes é cadastrado com sucesso no localStorage
    }
  }

  return (
    <div className="register">
        <h2 className="register__title">Novo Usuário</h2>
        <Form className="register_form" onSubmit={submitHandler}>
          <Input className="register__form__input" type="text" placeholder="nome" name="nome" required />
          <Input className="register__form__input" type="email" placeholder="email" name="email" required />
          <Input className="register__form__input" type="password" placeholder="senha" name="senha" required />
          <Input className="register__form__input" type="date" placeholder="data de nascimento" name="dataNascimento" required />
          <Input className="register__form__input" type="text" placeholder="estado" name="estado" required />
          <Input className="register__form__input" type="text" placeholder="país" name="pais" required />
          <Button className="register__form__button" type="submit">CADASTRAR</Button>
        </Form>
    </div>
  );
};

export default Register;
