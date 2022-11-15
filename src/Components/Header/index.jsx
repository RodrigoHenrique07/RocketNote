import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from "react-icons/ri"
import { useNavigate } from 'react-router-dom'

export function Header () {

    
    const navigate = useNavigate()


const Sair = ()=> {
    navigate('/')
}

    return(
        <Container>
            <Profile to="/profile">
                <img 
                src="https://github.com/RodrigoHenrique07.png" 
                alt="Foto do usuário"
                />
                <div>
                    <span>Bem-Vindo</span>
                    <strong>Rodrigo Henrique</strong>

                </div>
            </Profile>  

            <Logout onClick={Sair}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}