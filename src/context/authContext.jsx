import { createContext } from 'react';


const AuthContext = createContext(null);

export function AuthProvider({children}) {
  const [user, setUser] = useState();

  <AuthContext.Provider value={
    user
  }>
    {children}
  </AuthContext.Provider>
}
