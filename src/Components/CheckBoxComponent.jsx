import React from 'react'

export const CheckBoxComponent = ({service, duration, handleAddOn, selectedAddOn, feature}) => {
  
  const checked = (value) => {
      return (
        (selectedAddOn.includes(value) ? true : false)
      )
  }
  return (
    <div className={`checkbox flex ${(checked(service)) ? "checked" : ""}`}>
            <div className="flex">
                <input type="checkbox" id={service} value={service} onChange={() => handleAddOn(service)} checked={checked(service)}/>
                <div>
                    <label htmlFor={service}>{service}</label>
                    <p>{feature}</p>
                </div>                
            </div>
            <p>{duration}</p>
    </div>
  )
}
