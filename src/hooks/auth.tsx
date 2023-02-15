import { createContext, ReactNode, useContext, useReducer } from 'react';

interface LoginAction {
  type: 'login' | 'logout';
}

interface LoginState {
  auth: boolean;
}

export function reducer(state: LoginState, action: LoginAction): LoginState {
  switch (action.type) {
    case 'login':
      return { auth: true };
    case 'logout':
      return { auth: false };
    default:
      throw new Error();
  }
}

interface LoginContextValue {
  authed: LoginState;
  dispatch: React.Dispatch<LoginAction>;
}

const initialState: { auth: boolean } = { auth: false };

const AuthContext = createContext<LoginContextValue>(null as any);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authed, dispatch] = useReducer<React.Reducer<LoginState, LoginAction>>(
    reducer,
    initialState
  );

  return (
    <AuthContext.Provider value={{ authed, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function AuthConsumer() {
  return useContext(AuthContext);
}
