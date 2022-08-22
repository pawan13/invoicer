import { useState, useRef } from 'react';
import ClientDetails from './components/ClientDetails';
import Footer from './components/Footer';
import Header from './components/Header';
import InvoiceInformation from './components/InvoiceInformation';
import Notes from './components/Notes';
import ShopDetails from './components/ShopDetails';
import Table from './components/Table';
import TableForm from './components/TableForm';
import ReactToPrint from 'react-to-print';
import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { About, Home, SuggestionBox, Testimonials, Video } from './pages';
// import Invoice from './components/App';
// import AuthContext from './context/auth';
// import { Header, Footer } from './pages';

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [clientName, setClientName] = useState('');
  const [notes, setNotes] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [list, setList] = useState([]);
  const [total, setTotal] = useState([]);

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main
        className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl 
      bg-white rounded shadow"
      >
        {showInvoice ? (
          <>
            <ReactToPrint
              trigger={() => (
                <button
                  className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 
            rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 
            transition-all duration-300"
                >
                  Print/Download
                </button>
              )}
              content={() => componentRef.current}
            />

            <div ref={componentRef} className="pt-5">
              <Header handlePrint={handlePrint} />
              <ShopDetails />
              <InvoiceInformation
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
                dueDate={dueDate}
              />
              <ClientDetails
                name={clientName}
                mobileNumber={mobileNumber}
                email={email}
              />
              <Table
                description={description}
                quantity={quantity}
                price={price}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
              <Notes notes={notes} />
              <Footer />
            </div>
            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 
              rounded shadow border-2 border-blue-500 hover:bg-transparent 
              hover:text-blue-500 transition-all duration-300"
            >
              Edit Information
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              <label htmlFor="invoiceNumber">Enter the Invoice Number</label>
              <input
                type="Number"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Enter the Invoice Number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />

              <label htmlFor="invoiceDate">Enter the Invoice Date</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Invoice Date"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />

              <label htmlFor="dueDate">Enter the Due Date</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Invoice Date"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              <label htmlFor="clientName">Enter your Client's name</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter your Client's name"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
              <label htmlFor="mobileNumber">
                Enter your Client's Mobile Number
              </label>
              <input
                type="Number"
                name="mobileNumber"
                id="mobileNumber"
                placeholder="Enter your Client's Mobile Number"
                autoComplete="off"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <label htmlFor="email">Enter your Client's Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your Client's Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="20"
                rows="10"
                placeholder="Additional notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 text-white font-bold py-2 px-8 
              rounded shadow border-2 border-blue-500 hover:bg-transparent 
              hover:text-blue-500 transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
