import React from "react"

type FormProps = React.ComponentProps<'form'>

const Form = ({...props}: FormProps) =>{

    return(

        <form {...props}>
            
        </form>
    )
}

export default Form