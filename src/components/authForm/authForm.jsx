import { useState } from "react"
import { Input } from '../../ui/input/Input'
import Button from "../../ui/button/Button"
import { useLoginMutation } from "../../store/auth-store"
import { useNavigate } from "react-router"
import "./style.css"


const LoginForm = () => {
    const [loginOrEmail, setLoginOrEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate('')

    const {mutate, isPending} = useLoginMutation()

    const login = (e) => {
        e.preventDefault()
        mutate({ loginOrEmail, password })
    }
  return (
    <div>
        <form className="signInBlock"
        onSubmit={login}>
            <Input 
            type="text" 
            className={"input_default"}
            placeholder="Login or Email" 
            value={loginOrEmail} 
            onChange={e => setLoginOrEmail(e.target.value)}/>
            <Input 
            type="password" 
            className={"input_default"}
            placeholder="*****" 
            value={password} 
            onChange={e => setPassword(e.target.value)}/>
            <Button className={"default"} disabled={isPending} onClick={() => navigate("/")}>Sign In</Button>
        </form>
    </div>
  )
}

export default LoginForm