import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { AuthConsumer } from './hooks/auth';

function App() {
  const { authed, dispatch } = AuthConsumer();
  console.log(authed);
  return (
    <h1 className='container mx-auto'>
      <nav className='bg-gray-100 flex gap-4'>
        <Link to='/invoices'>
          <span>Invoice</span>
        </Link>
        <Link to='/expenses'>
          <span>Expenses</span>
        </Link>
        <Link to='/dashboard'>
          <span>Dashboard</span>
        </Link>
        <Link to='/login'>
          <span>Login</span>
        </Link>
      </nav>
      <Outlet></Outlet>
    </h1>
  );
}

export default App;
