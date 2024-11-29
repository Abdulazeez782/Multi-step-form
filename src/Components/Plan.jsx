import React from 'react'
import { SubscriptionCard } from './SubscriptionCard'
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'
import { ButtonComponent } from './ButtonComponent'

export const Plan = ({activeStep, isMonthly, toggleSwitch, selected, handleSelect, addOns}) => {
     

  return (
    <article className={`plan-section ${activeStep}`}>

        <div className="main-content width">
            <h1 className="header">Select your plan</h1>
            <p className="paragraph">You have the option of monthly or yearly billing</p>
            <div className="flex cards">
                <SubscriptionCard cardId={"Arcade"} icon={arcadeIcon} duration={isMonthly ? "$9/mo" : "$90/yr"} free={isMonthly ? "" : "2 Months Free"} select={handleSelect} selected={(selected === "Arcade") ? "selected": ""}/>

                <SubscriptionCard cardId={"Advanced"} icon={advancedIcon} duration={isMonthly ? "$12/mo" : "$120/yr"} free={isMonthly ? "" : "2 Months Free"}  selected={(selected === "Advanced") ? "selected": ""} select={handleSelect} />

                <SubscriptionCard cardId={"Pro"} icon={proIcon} duration={isMonthly ? "$15/mo" : "$150/yr"} free={isMonthly ? "" : "2 Months Free"} handleSelect={handleSelect} selected={(selected === "Pro") ? "selected": ""} select={handleSelect} />
            </div>

            <div className="toggle-switch flex">
                <span className={`toggle-option ${isMonthly ? "active-sub" : ""}`}>Monthly</span>
                <div className={`toggle-button ${isMonthly ? "": "yearly"}`} onClick={toggleSwitch}>
                    <div className="toggle-circle"></div>
                </div>
                <span className={`toggle-option ${isMonthly ? "" : "active-sub"}`}>Yearly</span>
            </div>   
        </div>
        
        <div className="nav-buttons flex">
            <ButtonComponent button={"prev-button"} value={"Go back"} click={() => addOns("go-back-info")}/>
            <ButtonComponent button={"next-button"} value={"Next step"} click={() => addOns("next-addons")}/>
        </div>     
    </article>
  )
}
