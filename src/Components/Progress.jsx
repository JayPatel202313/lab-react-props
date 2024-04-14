import React from 'react'

export default function Progress(props) {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${props.donations.reduce((t,a)=>{
            return t + a.amount;
        },0)}</span> of
        <span className="secondary">$1000</span>
      </h2>
    </section>
  )
}
