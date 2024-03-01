import { LoginType } from "../../types/login.types";
import { FormEvent } from "react";
import { findUserLogin } from "../../utils/findUserLogin.utils";
import { comparePasswords } from "../../utils/comparePasswords.utils";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const navigate = useNavigate()

  const submitHandler = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const values: { [key: string]: string } = {};

    formData.forEach((value, key)=>{
      values[key] = value.toString()
    })

    const loginUser: LoginType = {
      email: values.email,
      senha: values.senha
    }

    const findUser = findUserLogin(loginUser)
    if(!findUser){
      alert('email ou senha incorretos')
    }

    if(findUser){
      const correctPassword = comparePasswords(findUser, loginUser)

      if(correctPassword){
        alert("Login efetuado com sucesso")
        if(localStorage.getItem("loggedUser")){
          localStorage.removeItem("loggedUser")
        }
        localStorage.setItem('loggedUser', JSON.stringify(findUser))
        navigate("/games")
      }else {
        alert("email ou senha incorretos")
      }
    }
  }

  return (
    <div className="login">
      <h2 className="login_title">Login</h2>
      <Form className="login_form" onSubmit={submitHandler}>
        <Input className="login_form_input" name="email" type="email" placeholder="email" />
        <Input className="login_form_input" name="senha" type="password" placeholder="senha" />
        <Button className="login__form__button" type={"submit"}>LOGIN</Button>
      </Form>
    </div>
  );
};

export default Login;
