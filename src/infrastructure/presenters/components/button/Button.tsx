import React from 'react'
import { ButtonInterface } from 'infrastructure/presenters/interfaces/button.interface'
import './Button.scss'

export const Button: React.FC<ButtonInterface> = ({
  type,
  disabled,
  text,
  onClick,
}) => {
  return (
    <button
      className="button"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
