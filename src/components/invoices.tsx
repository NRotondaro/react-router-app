import { Link, NavLink, Outlet } from 'react-router-dom';
import { invoices } from '../data/data';

export default function Invoices() {
  return (
    <main className='text-center'>
      <div className='flex flex-col gap-3'>
        {invoices.map((invoice) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-red-400 bg-gray-200' : ''
            }
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </div>

      <Outlet></Outlet>
    </main>
  );
}
