import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { store } from "../api/localStorage";

const { getToken, isExpired, refresh } = store;

export function AuthGuard({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(location.pathname != '/login') {
      try {
        if(getToken() != null && isExpired()) {
          refresh();
        }

        if(getToken() == null) {
          navigate('/login');
        }
      } catch (e) {
        navigate('/login')
      }
    } else {
      try {
        if(getToken() != null  && !isExpired()) {
          navigate("/")
        }

        if(getToken() != null && isExpired()) {
          refresh();
        }
      } catch (e) {
        console.log(e)
      }
    }

  
  }, [location.pathname])

  return children
}
