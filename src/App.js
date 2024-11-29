
import { useEffect, useState } from 'react';
import './App.scss';
import { Main } from './Components/Main';

function App() {
  const [currentStep, setCurrentStep] = useState("info");
  const [formData, setFormData] = useState({name: "", email: "", phone: ""});
  const[errors, setErrors] = useState({});
  const [isMonthly, setIsMonthly] = useState(true); 
  const [selectedCard, setSelectedCard] = useState("");
  const [selectedAddOn, setSelectedAddOn] = useState([]);

 
  const handleSelectedAddOn = (value) => {    
       setSelectedAddOn(prevValue => {
        const newValues = new Set(prevValue);
        if(newValues.has(value)) {
          newValues.delete(value);
        } else {
          newValues.add(value);
        }
        return Array.from(newValues);
       })     
  }

  useEffect(() => {   
    
  }, [selectedAddOn])

  
  useEffect(() => {    
    
  }, [selectedCard])
  
  const handleAddOns = (info) => {
    if(info === "go-back-info") {
      setCurrentStep("info")
    }

    if(info === "go-back-plan") {
      setCurrentStep("plan")
    }

    if(info === "add-on") {
      setCurrentStep("add-ons")
    }

    if(info === "next-addons" && selectedCard) {
      setCurrentStep("add-ons")
    }

    if(info === "next-summary" && selectedAddOn.length > 0) {
      setCurrentStep("summary")
    }

    if(info === "thank-you") {
      setCurrentStep("thank-you")
    }
    console.log("i am clicked");

    return currentStep;    
  }
  
  const handleSelect = (card) => {      
    setSelectedCard(card);
    console.log(selectedCard);
  }

  const toggleSwitch = () => {        
    setIsMonthly(!isMonthly);
  }  

  const handleChange = (e) => { 
   setFormData({...formData, [e.target.name]: [e.target.value]})
  }

  const validate = () => {
    let validationErrors = {};
    if(!formData.name) {
      validationErrors.name = "This field is required";
    }
    if(!formData.email) {
      validationErrors.email = "This field is required";
    }
    if(!formData.phone) {
      validationErrors.phone = "This field is required";
    }

    return validationErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if(Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setCurrentStep("plan");
    }
  }


  return (
    <>
      <Main step={currentStep} change={handleChange} value={formData} submit={handleSubmit} error={errors} isMonthly={isMonthly} toggleSwitch={toggleSwitch} selectedCard={selectedCard} handleSelect={handleSelect} addOns={handleAddOns} handleAddOns={handleSelectedAddOn} selectedAddOn={selectedAddOn}/>
    </>
  );
}

export default App;
