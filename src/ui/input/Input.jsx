import './input.css'
import Button from '../button/Button'

const Input = ({ type, placeholder, className, ...props }) => {
  return (
    <div className='inputContainer'>
        <input className={className} type={type} placeholder={placeholder} {...props}/>
        <Button className={"default"}>Search</Button>
    </div>
  )
}

export default Input