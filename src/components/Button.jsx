import React from 'react'

const Button = ({ 
    children,
    type = 'button',
    bgClor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
 }) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgClor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button
