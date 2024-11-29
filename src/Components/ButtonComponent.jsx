import React from 'react'

export const ButtonComponent = ({click, value, button}) => {
  return (
    <button className={button} onClick={click}>{value}</button>
  )
}
