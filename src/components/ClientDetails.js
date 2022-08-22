import React from 'react';

export default function ClientDetails({ clientName, mobileNumber, email }) {
  return (
    <div>
      <section className="mt-10">
        <h2 className=" font-bold  mb-1 text-2xl uppercase ">{clientName} </h2>
        <p className="font-bold">{mobileNumber}</p>
        <p className="font-bold">{email}</p>
      </section>
    </div>
  );
}
