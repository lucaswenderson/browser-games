import Input from "./Input"
import Form from "./Form"
import Button from "./Button"
import { FormEvent } from "react"
import findCategory from "../utils/findCategory.utils"

const FormRegisterCategories = () => {

    const registerCategory = (category: string) =>{
        const localCategories = localStorage.getItem("listCategories)")
        let listCategories: string[] = []

        if(localCategories){
            listCategories = JSON.parse(localCategories)
        }

        listCategories.push(category)
        localStorage.setItem("listCategories", JSON.stringify(listCategories))
    }

    const submitHandler =(e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()


        const formData = new FormData(e.currentTarget)

        const values: {[key: string]: string} = {}


        formData.forEach((value, key)=>{
            values[key] = value.toString()

        })

        const categoryIsAlreadyExists = findCategory(values.categoria)

        if(categoryIsAlreadyExists){
            alert(`A categoria ${values.categoria} já está cadastrada no sistema`)
        }else{
            registerCategory(values.categoria)
            alert(`A categoria ${values.categoria} foi registrada com sucesso`)
        }
    }

    return(
        <div className="formRegisterCategories">
            <h2 className="formRegisterCategories__title">Categorias</h2>
        <Form className="formRegisterCategories__form" onSubmit={submitHandler}>
            <Input className="formRegisterCategories__input" name="categoria" type="text" placeholder="categoria" />
            <Button type="submit">CADASTRAR</Button>
        </Form>
        </div>
    )

}

export default FormRegisterCategories