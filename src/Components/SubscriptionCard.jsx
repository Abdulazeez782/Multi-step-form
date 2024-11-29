import React from 'react'

export const SubscriptionCard = ({icon, duration, free, selected, cardId, select}) => {
  return (   
        <div className={`card ${selected}`} onClick={() => select(cardId)}>
            <img src={icon} alt="" />
          <div>              
              <h4>{cardId}</h4>
              <p className="duration">{duration}</p>
              <p className="free">{free}</p>
          </div>
        </div> 
    
  )
}
