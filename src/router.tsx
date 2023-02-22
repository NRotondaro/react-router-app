import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Bills from './components/bills';
import Dashboard from './components/dashboard';
import Expenses from './components/expenses';
import Invoices from './components/invoices';
import Login from './components/login';
import { RequireAuth } from './components/require-auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/invoices',
        element: <RequireAuth />,
        children: [
          {
            element: <Invoices />,
            children: [
              {
                index: true,
                element: (
                  <main className='text-center py-5'>
                    <p>Select an Invoice</p>
                  </main>
                ),
              },
              {
                path: ':invoiceId',
                element: <Bills />,
              },
            ],
          },
        ],
      },
      {
        path: '/expenses',
        element: <Expenses />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/dashboard',
        element: <RequireAuth />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
      {
        path: '*',
        element: (
          <main className='text-center'>
            <p className='text-3xl'>There's nothing here !</p>
          </main>
        ),
      },
    ],
  },
]);
