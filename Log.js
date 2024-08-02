import React from "react";
import './Log.css'
import { useNavigate } from 'react-router-dom'
function Log(props){

    let navigate = useNavigate()

    const[name, setName]=React.useState("")
    const[pass, setPass]=React.useState("")
    // const[isLogin, setIsLogin] = React.useState(true)


    const handleChange1 = (e)=>{
        setName(e.target.value)
    }
    const handleChange2 = (e)=>{
        setPass(e.target.value);
    }
    const handleReg = ()=>{
        localStorage.setItem("Username","Miloni")
        localStorage.setItem("Password","12345")
    }
    const handleClick = ()=>{
        if(!name){
            window.alert("Enter Username!!")
        }
        else if(!pass){
            window.alert("Enter Password!!")
        }
        else{
        // localStorage.setItem("Name",name)
        // localStorage.setItem("Pwd",pass)

        // const n = localStorage.getItem("Name")
        // const pd = localStorage.getItem("Pwd")

        const n = localStorage.getItem("Username")
        const p = localStorage.getItem("Password")

        if(name==n && pass==p){
            navigate('/Todo')
        }
        else{
            navigate('/')
            window.alert("Wrong credentials")
        }
        // setName(n)
        // setPass(p)
        // props.loginval()
        }
    }

    return(
        <>

        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6" id="ldiv">
                <center>
                <br/><br/>   
                <h1><u>Login Form</u></h1>
                <br/><br/>
                <font size="5">
        
                <br/>
                <label>User Name:&nbsp;&nbsp;</label>
                <input type="text" id="name" onChange={(e)=>{handleChange1(e)}} required/><br/><br/>

                <label>Password:&nbsp;&nbsp;</label>
                <input type="password" id="pw" onChange={(e)=>{handleChange2(e)}} required/>
                <br/><br/>

            
                <button type="submit" style={{borderRadius: "5px"}} onClick={()=>{handleReg()}}>
                    REGISTER
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit" style={{borderRadius: "5px"}} onClick={()=>{handleClick()}}>
                    LOGIN
                </button>
                <br/><br/>
                </font>
                </center>
            </div>
            <div class="col-md-3"></div>
        </div>
        </>
    )
}

export default Log