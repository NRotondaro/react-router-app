import './App.css';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthConsumer } from './hooks/auth';

function App() {
  const {
    authed: { auth },
  } = AuthConsumer();
  return (
    <main className='container mx-auto space-y-4'>
      <nav className='bg-gray-100 flex gap-4'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
        >
          <span>Home</span>
        </NavLink>
        <NavLink
          to='/login'
          className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
        >
          <span>Login</span>
        </NavLink>
        {/* {auth ? ( */}
        <>
          <NavLink
            to='/invoices'
            className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
          >
            <span>Invoices</span>
          </NavLink>
          <NavLink
            to='/dashboard'
            className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
          >
            <span>Dashboard</span>
          </NavLink>{' '}
        </>
        {/* ) : null} */}
      </nav>
      <Outlet></Outlet>
    </main>
  );
}

export default App;
