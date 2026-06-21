import './input.css'
import Button from '../button/Button'

export const InputSearch = ({ value, onChange, className, onSearch, ...props }) => {
  return (
    <div className="inputContainer">
      <input
        className={className}
        value={value}
        onChange={onChange}
        {...props}
      />
      <Button className={'default'} onClick={onSearch}>Search</Button>
    </div>
  )
}

export const Input = ({ type, placeholder, className, value, onChange, ...props }) => {
  return (
    <div className="inputContainer">
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}
