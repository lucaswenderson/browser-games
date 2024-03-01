import React from "react";

type MenuProps = React.ComponentProps<'nav'> 

const Menu = ({children,...props}: MenuProps) =>{

    return(
        <nav {...props}>{children}</nav>
    )
}

export default Menu