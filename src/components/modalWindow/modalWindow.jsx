import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import LoginForm from '../authForm/authForm'
import RegisterForm from '../registerForm/registerForm'
import Button from '../../ui/button/Button'
import "./style.css"


export const Modal = ({ onClose }) => {
    const [step, setStep] = useState('signIn')
    const signInModal = step === "signIn"

    useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className='modalContainer' onClick={onClose}>
        <div className='modalWindow' onClick={(e) => e.stopPropagation()}>
            <div className='modalHeader'>
                <h1>Hello!</h1>
                <Button className={"default red"} onClick={onClose}>X</Button>
            </div>
            <div className='tabs'>
                <Button 
                className={signInModal ? "nav small current" : "nav small"}
                onClick={() => setStep("signIn")}
                >SIGN IN</Button>
                <Button
                className={!signInModal ? "nav small current" : "nav small"}
                onClick={() => setStep("register")}
                >REGISTER</Button>
            </div>
            <div className='formBlock'>
                {signInModal ? <LoginForm /> : <RegisterForm />}
            </div>
        </div>
    </div>
  )
}