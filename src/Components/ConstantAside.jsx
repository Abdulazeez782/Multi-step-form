import React from 'react'

export const ConstantAside = ({number, stepNum, step, activeClass}) => {
  return (
    <aside className="flex constant-section">
            <div className={activeClass}>{number}</div>
            <div>
                <p>{stepNum}</p>
                <h3>{step}</h3>
            </div>
    </aside>
  )
}
