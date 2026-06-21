import './select.css'

export const Select = ({ className, value, onChange, children, ...props }) => {
  return (
    <div className="select_default">
      <select
        className={className}
        value={value}
        onChange={onChange}
        {...props}
      >
      {children}
     </select>
    </div>
  )
}

export const Option = ({ value, className, children }) => {
    return(
        <option
          className={className}
          value={value}
        >
            {children}
        </option>
    )
    
}