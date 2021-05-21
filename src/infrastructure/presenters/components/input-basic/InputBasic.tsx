import React, { useEffect, useState } from 'react'
import { InputInterface } from 'infrastructure/presenters/interfaces/input.interface'
import './InputBasic.scss'

export const InputBasic: React.FC<InputInterface> = ({
  name,
  onChangeInput,
  placeholder,
  type,
  value,
}) => {
  const [inputValue, setInputValue] = useState<string>('')

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <input
      className="input-basic"
      name={name}
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={onChangeInput}
    />
  )
}
