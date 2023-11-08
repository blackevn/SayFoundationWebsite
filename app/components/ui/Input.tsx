import React from 'react'

interface InputProps {
    name?: string;
    value?: any;
    modifier?: string
    placeholder: string 
    
}

const Input: React.FC<InputProps> = ({name, value, modifier, placeholder}) => {
  return <input className={`${modifier} input w-full`} name={name} value={value} placeholder={placeholder}/>
}

export default Input