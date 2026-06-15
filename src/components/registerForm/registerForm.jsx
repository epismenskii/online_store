import React, { useState } from 'react'
import { useRegisterMutation } from '../../store/auth-store'
import Button from '../../ui/button/Button'
import { Input } from '../../ui/input/Input'
import "./style.css"


const RegisterForm = () => {
    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {mutate, isPending} = useRegisterMutation()

    const register = (e) => {
        e.preventDefault()

        mutate({ login, email, password })
    }
  return ( 
    <div>
        <form className='registerBlock'
        onSubmit={register}>
            <Input
            type="text" 
            className={"input_default"}
            placeholder="Login" 
            value={login} 
            onChange={e => setLogin(e.target.value)}/>
            <Input 
            type="email" 
            className={"input_default"}
            placeholder="Email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}/>
            <Input 
            type="password"  
            className={"input_default"}
            placeholder="*****" 
            value={password} 
            onChange={e => setPassword(e.target.value)}/>
            <Button className={"default"} disabled={isPending}>Register</Button>
        </form>
    </div>
  )
}

export default RegisterForm