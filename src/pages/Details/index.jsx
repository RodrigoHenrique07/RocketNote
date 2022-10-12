import { Container, Links, Content } from "./style";

import { Tags } from "../../Components/Tags";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";
import { ButtonText } from "../../Components/ButtonText";



export function Details(){

  return(
  <Container>
    <Header/>
    <main>
      <Content>
        <ButtonText title="Excluir nota" isActive>
        </ButtonText>
        <h1>Introdução ao React</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore iure officiis laborum. 
          Obcaecati quibusdam error quia, reiciendis dolore consequuntur repellat commodi 
          doloremque distinctio, sapiente voluptas voluptate eligendi eveniet incidunt. Eum. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi dolores 
          totam aliquam laboriosam distinctio iste! Dolore, quia veniam sit voluptatum s
          equi hic praesentium quos delectus aliquid voluptatem corrupti minima.
        </p>
        
        <Section title="Likns úteis">
          <Links>
            <li><a href="#">https://www.rocketseat.com.br/</a></li>
            <li><a href="#">https://www.rocketseat.com.br/</a></li>
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tags title="espress"></Tags>
          <Tags title="nodejs"></Tags>
        </Section>
  
        <Button title="Voltar"/>
      </Content>
    </main>
  </Container>

  )
}



