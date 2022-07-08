
import './title.css';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

export default function Title({children, name}){
  const { user, signOut } = useContext(AuthContext); 
  return(
    <div className="title">
      {children}
      <span>{name}</span>

        <div className="container-btn-sair">
            <button className="logout-btn-sair" onClick={ () => signOut() } >
               Sair
            </button>
        </div>
    </div>
  )
}