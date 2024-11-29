import React from 'react'

export const Info = ({change, value, submit, error, activeStep}) => {
  return (
    <article className={`info-section ${activeStep}`}>
        
        <form action="" onSubmit={submit} className="form-section">
            <div className="width">
                <h1 className="header">Personal Info</h1>
                <p className="paragraph">Please provide your name, email address and phone number.</p>

                <div>                
                    <label htmlFor="name">Name</label>
                    {error.name && <span>This field is required</span>}
                    <input className={(error.name) ? "error-active" : ""} type="text" value={value.name} name="name" placeholder="e.g. Oludare Ajadi" onChange={change} />
                </div>
                
                <div>
                    <label htmlFor="email">Email Address</label>
                    {error.email && <span>This field is required</span>}
                    <input className={(error.email) ? "error-active" : ""} type="email" name="email" value={value.email} placeholder="e.g.oludare@yahoo.com" onChange={change}/>
                </div>
                
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    {error.phone && <span>This field is required</span>}
                    <input className={(error.phone) ? "error-active" : ""} type="number" value={value.phone} name="phone" placeholder="e.g.+234 495 595 3409" onChange={change} />
                </div>

            </div>            

            <div className="submit-btn">
                <input type="submit" value="Next Step" className="next-button"/>
            </div>
        </form>
    </article>
  )
}
