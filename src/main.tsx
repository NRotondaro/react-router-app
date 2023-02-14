import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AuthProvider } from './hooks/auth';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    {/* <Routes>
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
        <Route path='/login' element={<div>Login</div>} />
        <Route
          path='*'
          element={
            <main className='text-center'>
              <p className='text-3xl'>There's nothing here !</p>
            </main>
          }
        />
      </Route>
    </Routes> */}
  </React.StrictMode>
);
