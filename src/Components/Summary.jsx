import React from 'react'
import { ButtonComponent } from './ButtonComponent';

export const Summary = ({activeStep, monthly, selected, selectedAddOn, step}) => {

    const checkSelect = (value) => {
        const message = value === "Arcade" ? "Arcade" : value === "Advanced" ? "Advanced" : "Pro";
        return message;
    }

    const checkSelectPrice = (duration, plan) => {
        let planString = "";
        if(duration && plan === "Arcade") {
            return (planString = "$9/mo")
        }        
        if(duration && plan === "Advanced") {
            return (planString = "$12/mo");
        }
        if(duration && plan === "Pro") {
            return (planString = "$15/mo")
        }
        if(!duration && plan === "Arcade") {
            return (planString = "$90/yr");
        }
        if(!duration && plan === "Advanced") {
            return (planString = "$120/yr");
        }
        if(!duration && plan === "Pro") {
            return (planString = "$150/yr");
        }
        
        return planString;
    }

    const addOnAmount = (duration, add, pickedPlan) => {
        let online = 0;
        let profile = 0;
        let storage = 0;
        let plan = 0;
        let total = 0;
        
        if(duration && pickedPlan === "Arcade") {
            plan = 9;
        }
        
        if(!duration && pickedPlan === "Arcade") {
            plan = 90;
        }
        
        if(duration && pickedPlan === "Advanced") {
            plan = 12;
        }
        
        if(!duration && pickedPlan === "Advanced") {
            plan = 120;
        }
        if(duration && pickedPlan === "Pro") {
            plan = 15;
        }
        
        if(!duration && pickedPlan === "Pro") {
            plan = 150;
        }

        if(duration && add.includes("Online service")) {
            online = 1;
        }
        if(!duration && add.includes("Online service")) {
            online = 10;
        }
        
        if(duration && add.includes("Larger storage")) {
            storage = 2;
        }
        if(!duration && add.includes("Larger storage")) {
            storage= 20;
        }

        if(duration && add.includes("Customizable profile")) {
            profile = 3;
        }
        if(!duration && add.includes("Customizable profile")) {
            profile = 30;
        }

        total = parseInt(storage) + parseInt(profile) + parseInt(online) + parseInt(plan);
        console.log(total);
        

        return parseInt(total)
    }


    console.log(addOnAmount(monthly, selectedAddOn, selected));    

  return (
    <article className={`summary-section ${activeStep}`}>
        <div className="main-content width">
            <h1 className="header">Finishing up</h1>
            <p className="paragraph">Double-check everything looks OK before confirming</p>

            <div className="plan-details">                
                <div className="flex selected-plan">
                    <div>
                        <h4>{checkSelect(selected)}<span> {monthly ? "(Monthly)" : "(Yearly)"}</span></h4>
                        <button className="prev-button" onClick={() => step("go-back-plan")} >Change</button>
                    </div>
                    <p>{checkSelectPrice(monthly, selected)}</p>
                </div>
                <hr></hr>
                <div className="flex plan-addon">
                    {(selectedAddOn.includes("Online service")) && <p>Online Service</p>}
                    {(selectedAddOn.includes("Online service") && monthly) && <p>+$1/mo</p>}
                    {(selectedAddOn.includes("Online service") && !monthly) && <p>+$10/yr</p>}
                </div>

                <div className="flex plan-addon">
                    {(selectedAddOn.includes("Larger storage")) && <p>Larger Storage</p>}
                    {(selectedAddOn.includes("Larger storage") && monthly) && <p>+$2/mo</p>}
                    {(selectedAddOn.includes("Larger storage") && !monthly) && <p>+$20/yr</p>}
                </div>
                
                <div className="flex plan-addon">                
                    {(selectedAddOn.includes("Customizable profile")) && <p>Customizable Profile</p>}
                    {(selectedAddOn.includes("Customizable profile") && monthly) && <p>+$3/mo</p>}
                    {(selectedAddOn.includes("Customizable profile") && !monthly) && <p>+$30/yr</p>}
                </div>
            </div>

            <div className="flex plan-addon total">
                <p>Total <span>{monthly ? "(per month)" : "(per year)"}</span></p>
                <p>${addOnAmount(monthly, selectedAddOn, selected)}/{monthly ? "mo" : "yr"}</p>
            </div>
        </div>
        
        
        <div className="nav-buttons flex">      
            <ButtonComponent button={"prev-button"} value={"Go back"} click={() => step("add-on")}/>
            <ButtonComponent button={"next-button"} value={"Submit"} click={() => step("thank-you")}/>
        </div> 
    </article>
  )
}
