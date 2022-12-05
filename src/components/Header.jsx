import pdi from '../assets/pdi.png';
import { Link } from 'react-router-dom';
import Button from '../components/Buttons/Button';
import { useAuthContext } from '../contexts/authContext';
import { useEffect } from 'react';
import { store } from '../services/api/localStorage';

function Header() {
  const { user, getUserData } = useAuthContext();

  useEffect(() => {
    getUserData(store.getUserId()); 
  }, [])

  function handleLogOut() {}

  return (
    <header className="p-3 text-white font-inter font-bold flex justify-between bg-blue-header mb-5 items-center">
      <Link className="flex items-center" to="/">
        <img className=" w-18 h-8 " src={pdi} alt="pdi" />
      </Link>
      <Link to="/usuarios">Plano do membros</Link>
      <Link to="/questionario">Questionários</Link>
      <div className="flex items-center">
        <img
          className="w-1/5 rounded-full mr-3"
          src={user?.picture} alt="user icon"
        />
        <Link className="flex items-center" to="/">
          <span className="mr-4">{user?.name}</span>
        </Link>
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
