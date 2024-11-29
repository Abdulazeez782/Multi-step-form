import React from 'react'
import { ConstantArticle } from './ConstantArticle'
import { DynamicArticle } from './DynamicArticle'

export const Main = ({step, change, value, submit, error, isMonthly, toggleSwitch, selectedCard, handleSelect, addOns, handleAddOns, selectedAddOn}) => {
  return (
    <main className="flex">
       <ConstantArticle step={step}/> 
       <DynamicArticle change={change} value={value} submit={submit} error={error} activeStep={step} isMonthly={isMonthly} toggleSwitch={toggleSwitch} selectedCard={selectedCard} handleSelect={handleSelect} addOns={addOns} handleAddOns={handleAddOns} selectedAddOn={selectedAddOn}/>
    </main>
  )
}
