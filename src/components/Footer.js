import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="footer li">
        <ul className="flex flex-col items-center justify-center">
          <li>
            <span className="font-bold">Payment Details</span>
          </li>
          <li>
            <span className="font-bold">Account holder:</span> Best Price
            Computer
          </li>
          <li>
            <span className="font-bold">Account Details:</span> 063112 10745218
          </li>
          <li>
            <span className="font-bold">Bank : </span> Commonwealth Bank
          </li>
        </ul>
      </footer>
    </div>
  );
}
