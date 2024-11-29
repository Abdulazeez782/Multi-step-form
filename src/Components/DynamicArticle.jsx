import React from 'react'
import { Info } from './Info'
import { Plan } from './Plan'
import { AddOns } from './AddOns'
import { Summary } from './Summary'
import { ThankYou } from './ThankYou'

export const DynamicArticle = ({change, value, submit, error, activeStep, isMonthly, toggleSwitch, selectedCard, handleSelect, addOns, handleAddOns, selectedAddOn}) => {
  return (
    <>
        <Info change={change} value={value} submit={submit} error={error} activeStep={(activeStep === "info") ? "active-step" : "" }/>

        <Plan activeStep={(activeStep === "plan") ? "active-step" : "" } isMonthly={isMonthly} toggleSwitch={toggleSwitch} selected={selectedCard} handleSelect={handleSelect} addOns={addOns}/>

        <AddOns activeStep={(activeStep === "add-ons") ? "active-step" : "" } monthly={isMonthly} handleAddOns={handleAddOns} selectedAddOn={selectedAddOn} addOns={addOns}/>

        <Summary activeStep={(activeStep === "summary") ? "active-step" : "" } monthly={isMonthly} selected={selectedCard} selectedAddOn={selectedAddOn} step={addOns}/>

        <ThankYou activeStep={(activeStep === "thank-you") ? "active-step" : "" }/>
    </>
  )
}
