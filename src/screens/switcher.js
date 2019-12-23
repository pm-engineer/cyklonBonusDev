import AuthRouter from "../routers/authRouter";
import NavigationManager from "../routers/managerRouter";
import UserRouter from "../routers/userRouter";
import React from "react";

const Switcher = (props) => {

    const { user, role } = props

    if(!user){
        return (<AuthRouter/> )
    }

    if(role === 'manager'){
        return  <NavigationManager/>
    }

    return <UserRouter/>
}

export default Switcher;
