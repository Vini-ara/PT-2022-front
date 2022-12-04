import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { store } from "../api/localStorage";

const { getToken, isExpired, refresh } = store;

export function AuthGuard({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(location.pathname != '/') {
      try {
        if(getToken() != null && isExpired()) {
          refresh();
        }

        if(getToken() == null) {
          navigate('/');
        }
      } catch (e) {
        navigate('/')
      }
    } else {
      try {
        if(getToken() != null  && !isExpired()) {
          navigate("/form")
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
