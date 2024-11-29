import React from 'react'
import { ConstantAside } from './ConstantAside'

export const ConstantArticle = ({step}) => {
  return (
    <article className="constant-article">
        <ConstantAside number={1} stepNum={"STEP 1"} step={"YOUR INFO"} activeClass={(step === "info") ? "active": ""}/>
        <ConstantAside number={2} stepNum={"STEP 2"} step={"SELECT PLAN"} activeClass={(step === "plan") ? "active": ""}/>
        <ConstantAside number={3} stepNum={"STEP 3"} step={"ADD-ONS"} activeClass={(step === "add-ons") ? "active": ""}/>
        <ConstantAside number={4} stepNum={"STEP 4"} step={"SUMMARY"} activeClass={(step === "summary" || step === "thank-you") ? "active": ""}/>
    </article>
  )
}
