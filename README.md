# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview
This challenge basically entails a subscription form with multiple steps, with each step representing a page of the form telling the user to fill certain information about themselves or selecting which type or mode of subscription they most likely prefer. The form ensures the user provides all the required information before proceeding to the next step by validation and displaying an error message for every information that the user fails to provide, and the user can also go back to the previous step to update their selctions / information. On the summary page is a summary of the user's selections and a button to confirm all their selections.

I solved this challenge using my frontend development knowledge incorporating my html + css + javascript knowledge in bringing the challenge to live as well as my problem solving skills. It was quite challenging - the entire process, i basically had zero idea how i was supposed to bring this to live from the onset but then i believed in my curious mind and problem solving skills in leading me through the entire process which it did. Now, ride with me as i summarize to you the entire process of bringing this to live.

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made


### Links



## My process
I used react js library in bringing this to live, i split the page into two main components, which are the constant and dynamic component, with the constant component representing the the left side of the page that remains unchanged throughout the entire step of filling the form. The dynamic component encompasses five main components each representing various steps while filling the form: 
**The information Component**
Users are provided a form to fill their basic information such as the name, email and phone number: The highlight here is that i used the onchange event on the input elements to populate the form data state provide the name and value of each input field in the formdata state which is of course an object variable, with that i could easily use the onsubmit event on the form element to check if all the values are present in the form data before enabling the user to proceed to the next step of the sequence. I also returned an error message on each of the input element whose value the user failed to provide. 
**The Plan Component**
Users are provided with 3 subscription plans to select from and also an option for monthly or yearly subscription with each duration of course having different prices. I used the IsMonthly state to change the contents of the card dynamically as required determined by the user toggling on the toggle inside the component to switch between monthly and yearly subscription respectively, this functionality was implemented with the click event with the use of the toggleSwitch function. There are two buttons at the bottom of the page, "go back" and "next step". The go back allows users to back to the form to update their basic information while the next step checks if a user has selected any of the subscription plans and then proceed to the addon if the check is successful.
**The AddOns Component** 
users are also provided with 3 addons to select from each with a different price for each of the addons, the addons are either based off the monthly  or yearly subscription selected by the user in the previous plan component, so the IsMonthly state is checked in this component before it is rendered. A selectedAddOn state holds an Array that comprises of each of the selected addOn. An ochange event is added on each of the addons that is used to add and remove the addons from the selectedaddon array. Again there is the "go back" and "next step" functionality on this component as well.
**The Summary Component**
In this component, users see a summary of all their selections from the previous steps. Informations are collected from the previous components and displyed on this summary page. Such as Plan selected, yearly or monthly, amount of plan selected, add ons selected and corresponding amount. Finally, the total amount of the plan and addons selected are calculated and displayed for the user. 
**Thank you Component**
In this component, a thank you message is displayed for the user upon the completion of all the steps of the form



### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- [Sass](https://sass-lang.com/) - Css Pre-processor
- [React](https://reactjs.org/) - JS library


### What I learned
in the course of building this project, i learned some new things, few of them will be highlighted below

**This css code helps select all input elements except the input with the type of "submit"**
```css
&:not([type="submit"])
```
**As basic as this might look helps my background on the constant component to scroll alongside its container making it more responsive**
```css
    background-attachment: scroll;    
```


**This Javascript arrow function uses the set object in javascript to add each selected addons to the selectedaddon array when any of them is clicked, it checks if the value is present in the set, if yes it deletes it and if no it adds it, the funtion then returns an array from the set.** 
```Javascript
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
  ```


**This javascript function is implemented to handle the submit event on the personal form, the main highlight here is the Object.keys method that returns the property names of the validation object as an array, to check if any error is present before submitting the form**
  ```javascript
   const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if(Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setCurrentStep("plan");
    }
  }
  ```


### Continued development
in future projects, i want to make use of the react useEffect hook better to understand fully how it functions. 


### Useful resources

- [Example resource 1](https://www.w3schools.com/) - The have tutorials on almost all major programming languages, library and framework, they are my first resort anytime i feel stuck on a concept.
- [Example resource 2](https://developer.mozilla.org/en-US/) - They have the best documentations


## Author

- Fullname - [Oludare Abdulazeez Ajadi]
- Frontend Mentor - [@Abdulazeez782](https://www.frontendmentor.io/profile/Abdulazeez782)
- Twitter - [@ajadii_](https://x.com/ajadii_)


