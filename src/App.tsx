import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <main className='container mx-auto space-y-4'>
      <nav className='bg-gray-100 flex gap-4'>
        <NavLink
          to='/invoices'
          className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
        >
          <span>Invoice</span>
        </NavLink>
        <NavLink
          to='/expenses'
          className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
        >
          <span>Expenses</span>
        </NavLink>
        <NavLink
          to='/dashboard'
          className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
        >
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to='/login'
          className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
        >
          <span>Login</span>
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </main>
  );
}

export default App;
