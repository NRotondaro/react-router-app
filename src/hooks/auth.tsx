import { createContext, PropsWithChildren, useContext } from 'react';

const initialState = { auth: false };

const authContext = createContext(initialState);

export function AuthProvider({ children }: PropsWithChildren) {
  return (
    <authContext.Provider value={initialState}>{children}</authContext.Provider>
  );
}

export function AuthConsumer() {
  return useContext(authContext);
}
