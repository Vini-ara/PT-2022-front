import { createContext, useContext } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({children}) {
  const [user, setUser] = useState();

  async function singIn(credential) {
    //await backend response 
    // set user to backend response
  }

  async function signOut(credential) {
    //await backend response
    setUser({});
  }

  <AuthContext.Provider value={{
    user,
    signIn,
    signOut
  }}>
    {children}
  </AuthContext.Provider>
}

export function useAuthContext() {
  return useContext(AuthContext);
}
