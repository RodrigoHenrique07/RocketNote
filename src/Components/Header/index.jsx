import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from "react-icons/ri"

export function Header () {

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

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}