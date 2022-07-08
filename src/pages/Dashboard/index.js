
import './dashboard.css';

import { useContext } from "react";
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { AuthContext } from "../../contexts/auth";
import firebase from '../../services/firebaseConnection';


export default function Dashboard(){
    const { signOut } = useContext(AuthContext);

    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Iniciais">
                    <FiMessageSquare size={25} />
                </Title>  
                
                <div className="container dashboard">
                    <span>Nenhuma Inicial registrada...</span>

                    <Link to="/new" className="new">
                        <FiPlus size={25} color="#FFF" />
                            Cadastrar nova Inicial
                    </Link>
                </div>
                
            </div>
        </div>
    )
}



