import {FiPlus, FiSearch} from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote} from './style';

import { Note} from '../../Components/Note';
import { Input} from '../../Components/Input';
import { Header} from '../../Components/Header';
import { Section } from '../../Components/Section';
import {ButtonText} from '../../Components/ButtonText';



export function Home (){



    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>
            <Header/>

            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="Frontend"/></li>
                <li><ButtonText title="Node"/></li>
                <li><ButtonText title="React"/></li>
            
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{title: 'React Modal',
                     tags: [

                        {id: '1', name: 'react' },

                     ]
                     
                     }}/>
                     <Note data={{title: 'Exemplo de Middleware',
                     tags: [

                        {id: '1', name: 'express' },
                        {id: '2', name: 'nodejs' }
                     ]
                     
                     }}/>
                     
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar nota
            </NewNote>

           

        </Container>
        
    )
};