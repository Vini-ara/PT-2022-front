import pdi from '../assets/pdi.png';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/Buttons/Button';
import { useAuthContext } from '../contexts/authContext';
import { useEffect } from 'react';
import { store } from '../services/api/localStorage';
import { api } from '../services/api/api';

function Header() {
  const { user, getUserData } = useAuthContext();
  const location = useLocation();

  const { getToken, isExpired, getUserId, clear } = store;

  useEffect(() => {
    console.log(location.pathname)
    getUserData(getUserId()); 
  }, [])

  function handleLogOut() {
    if(getToken() && !isExpired()) {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + getToken();
    }
    api.get('/auth/logout');
    clear();
  }

  return (
    <header className="px-3 py-3 text-white font-inter font-bold flex justify-between bg-blue-header mb-5 items-center">
      <Link className="flex items-center" to="/">
        <img className=" w-18 h-12 " src={pdi} alt="pdi" />
      </Link>
      <div>
        <Link className={`mr-8 ${location.pathname == "/usuarios" ? "underline underline-offset-4" : ""}`} to="/usuarios">Plano do membros</Link>
        <Link className={`${location.pathname == "/questionario" ? "underline underline-offset-4" : ""}`}to="/questionario">Questionários</Link>
      </div>
      <div className="flex items-center">
        <Link className="flex items-center" to="/">
          <span className="mr-4">{user?.name}</span>
        </Link>
        <img
          className="w-12 rounded-full mr-3"
          src={user?.picture} alt="user icon"
        />
        <Link to="login">
          <Button
            styles="text-blue-header bg-white px-3"
            onClick={handleLogOut}
          >
            Sair
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
