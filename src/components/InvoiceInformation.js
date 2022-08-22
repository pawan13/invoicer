import React from 'react';

export default function InvoiceInformation({
  invoiceNumber,
  invoiceDate,
  dueDate,
}) {
  return (
    <>
      <article className="mt-10 mb-14" flex flex-col items-end justify-end>
        <ul>
          <li className="p-1">
            <span className="font-bold">Invoice number:</span> {invoiceNumber}
          </li>
          <li className="p-1">
            <span className="font-bold">Invoice date:</span> {invoiceDate}
          </li>
          <li className="p-1">
            <span className="font-bold">Due date:</span> {dueDate}
          </li>
        </ul>
      </article>
    </>
  );
}
