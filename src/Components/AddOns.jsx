import React from 'react'
import { CheckBoxComponent } from './CheckBoxComponent'
import { ButtonComponent } from './ButtonComponent'

export const AddOns = ({activeStep, monthly, handleAddOns, selectedAddOn, addOns}) => {
  return (
    <article className={`add-ons ${activeStep}`}>
      <div className="main-content width">
        <h1 className="header">Pick add-ons</h1>
        <p className="paragraph">Add-ons help enhance your gaming experience</p>

        <CheckBoxComponent service={"Online service"} duration={monthly ? "$1/mo" : "$10/yr"} handleAddOn={handleAddOns} selectedAddOn={selectedAddOn} feature={"Access to multiplayer games"}/>
        <CheckBoxComponent service={"Larger storage"} duration={monthly ? "$2/mo" : "$20/yr"} handleAddOn={handleAddOns} selectedAddOn={selectedAddOn} feature={"Extra 1TB of cloud save"}/>
        <CheckBoxComponent service={"Customizable profile"} duration={monthly ? "$3/mo" : "$30/yr"} handleAddOn={handleAddOns} selectedAddOn={selectedAddOn} feature={"Custom theme on your profile"}/>        
      </div>        
        
        <div className="nav-buttons flex">            
            <ButtonComponent button={"prev-button"} value={"Go back"} click={() => addOns("go-back-plan")}/>
            <ButtonComponent button={"next-button"} value={"Next step"} click={() => addOns("next-summary")}/>
        </div> 
    </article>
  )
}
