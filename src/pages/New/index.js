
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';


function New(){
    return(
        <div>
             <Header/>
            <div className="content">
            <Title name="Iniciais">
                <FiMessageSquare size={25} />
            </Title> 

                <div className="container novo">
                    <form className='form-iniciais'>
                        <div className='titulo-inicial'>
                            <h1>PROCEDIMENTO DE ASSISTÊNCIA JURÍDICA AUXILIO POR INCAPACIDADE TEMPORÁRIA ou PERMANENTE</h1>
                        </div>
                        <div className='opcoes'>
                            
                        </div>

                    </form>
                    
                </div> 
                
            </div>

            
        </div>
    )
}

export default New;