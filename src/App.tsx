import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <h1 className='container mx-auto'>
      <nav className='bg-gray-100 flex gap-4'>
        <Link to='/invoices'>
          <span>Invoice</span>
        </Link>
        <Link to='/expenses'>
          <span>Expenses</span>
        </Link>
      </nav>
      <Outlet></Outlet>
    </h1>
  );
}

export default App;
