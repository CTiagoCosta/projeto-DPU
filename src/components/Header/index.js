
import { useContext } from 'react';
import './header.css';
import { AuthContext } from '../../contexts/auth';
/* import avatar from '../../assets/avatar.png'; */

import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings, FiRefreshCcw } from "react-icons/fi";

export default function Header(){
  const { user, signOut } = useContext(AuthContext); 

  return(
    <div className="sidebar">
      <div>
       {/*  <img src={user.avatarUrl === null ? avatar : user.avatarUrl } alt="Foto avatar" /> */}
      </div>

      <Link to="/dashboard">
        <FiHome color="#FFF" size={24} />
        Iniciais
      </Link>
      <Link to="/customers">
        <FiUser color="#FFF" size={24} />
        Petições
      </Link>   
      <Link to="/customers">
        <FiRefreshCcw color="#FFF" size={24} />
        Outros
      </Link>  
      <Link to="/profile">
        <FiSettings color="#FFF" size={24} />
        Configurações
      </Link>         
    </div>
    
  )
}