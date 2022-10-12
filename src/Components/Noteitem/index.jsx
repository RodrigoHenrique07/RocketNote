import {FiPlus, FiX} from 'react-icons/fi';


import { Container } from './style';
// A proprierade "isNew" está sendo passada para dentro com container, assim ela pode ser usada dentro do mesmo
// e será usada para identifcar se vai ser adicionado ou não um novo item
export function NoteItem ({isNew, value, onClick, ...rest}){

    return(

        <Container isNew={isNew}>
            <input 
            type="text"
            value={value}
            readOnly={!isNew} //Se não é novo, pode bloquear, ou seja, se for adicionado o link, vai permitrir só leitura
            {...rest}
             />

            <button 
            type='button'
            onClick={onClick}
            className= {isNew ? 'button-add' : 'button-delete'}
            // adicionando a class de forma condicional usando o if ternário
            >
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}
