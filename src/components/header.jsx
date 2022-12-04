import { Link } from 'react-router-dom';
import pdi from '../assets/pdi.png';

function Header() {
  return (
    <div className="p-3 text-white font-inter font-bold flex justify-between bg-blue-form">
      <img className=" w-18 h-8 " src={pdi} alt="pdi" />
      <Link to="/form">Plano do membros</Link>
      <Link to="/table">Questionários</Link>
      <Link to="/">
        <button className=" p-1 rounded-xl bg-white font-inter text-blue-form  border-3">
          Sair
        </button>
      </Link>
    </div>
  );
}

export default Header;
