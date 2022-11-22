import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  // eslint-disable-next-line no-unused-vars
  async function signIn(credential, callback) {
    //await backend response
    // set user to backend response
  }

  // eslint-disable-next-line no-unused-vars
  async function signOut(credential) {
    //await backend response
    setUser({});
  }

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
