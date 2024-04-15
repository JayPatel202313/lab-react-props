import React from 'react'

export default function RecentDonations(props) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>

        {props.donations.map((don)=> (
          <li><span>{don.name} donated ${don.amount}</span>{don.caption}</li>
        ))}

  
      </ul>
    </section>
  );
}
