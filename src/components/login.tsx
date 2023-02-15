import { AuthConsumer } from '../hooks/auth';

export default function Login() {
  const { dispatch } = AuthConsumer();
  return (
    <div>
      <h1>This is the Login page</h1>
      <button
        className='border px-5 bg-indigo-500 text-gray-50 rounded'
        onClick={() => {
          dispatch({ type: 'login' });
        }}
      >
        Login
      </button>
    </div>
  );
}
