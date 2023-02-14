import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Invoices from './components/invoices';
import Expenses from './components/expenses';
import Bills from './components/bills';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/invoices' element={<Invoices />}>
          <Route
            index
            element={
              <main className='text-center py-5'>
                <p>Select an Invoice</p>
              </main>
            }
          />
          <Route path=':invoiceId' element={<Bills />} />
        </Route>
        <Route path='/expenses' element={<Expenses />} />
        <Route
          path='*'
          element={
            <main className='text-center'>
              <p className='text-3xl'>There's nothing here !</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
