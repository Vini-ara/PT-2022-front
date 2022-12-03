import { createContext, useState, useContext } from 'react';
import { api } from '../api/api';
import { store } from '../api/localStorage';

const AuthContext = createContext();

const { saveToken, saveExpiration, saveUserId, clear } = store;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signIn = async (data) =>  {
    saveToken(data.accessToken);
    saveExpiration(data.expiresIn);
    saveUserId(data.user.id);
    getUserData(store.getUserId());
  }

  const getUserData = async (userId) => {
    try {
      const user = await api.get(`users/${userId}`)

      setUser(user.data);
    } catch(err) {
      console.log(err)
    }
  }

  const signOut = () => {
    try {
      api.get('/logout', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }  
      })
      
      clear();
    } catch(err) {
      console.log(err)
    }
  }

  const value = { 
    user, 
    signIn, 
    signOut,
    getUserData
  };

  return <AuthContext.Provider value={
    value
  }>
    {children}
  </AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
