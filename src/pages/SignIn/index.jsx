import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom'

import { Input } from "../../Components/Input";
import {Button} from "../../Components/Button";
import { Container, Form, Background } from "./style";


import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { auth } from '../../server/firebase';
import { useNavigate } from 'react-router-dom'




export function SignIn (){

    const provider = new GoogleAuthProvider()
    const navigate = useNavigate()
  
    provider.setCustomParameters({
      prompt: 'select_account',
    })

    const handleGoogleSignIn = async () => {
        try {
          const userCredentials = (await signInWithPopup(
            auth,
            provider,
          )) 
          if(userCredentials.user){
            navigate('/home')

          }
        } catch (error) {
         
        }
      }

    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Faça seu login</h2>

                <Input placeholder="E-mail" type="text" icon={FiMail}/>
                <Input placeholder="Senha" type="password" icon={FiLock}/>

                <Button title="Entrar"/>
                <Button 
                title="Conta google" 
                icon={FcGoogle} 
                onClick={handleGoogleSignIn}
                />
                <Link to="/register">
                Criar conta
                </Link>
            </Form>

            <Background/>
            
        </Container>
    )
}