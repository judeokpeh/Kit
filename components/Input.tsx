'use client'



interface InputProps{
    placeholder?: string;
    value?:string;
    type?:string;
    
    onChange:(event:React.ChangeEvent<HTMLInputElement>) => void
}
const Input:React.FC<InputProps> = ({
    placeholder,
    value,
    type,
    onChange
}) => {
  return (
    <div>
      <input 
      type= {type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className="
      p-1
      text-md
      border-2
      border-yellow-800
      rounded-md
      outline-none
      text-green-900
      focus:border-green-500
      focus:border-2
      transition
     
  "
      />
    </div>
  )
}

export default Input
