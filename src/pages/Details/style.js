import styled from "styled-components";

export const Container = styled.div`
   
   width: 100%;
   height: 100vh;

   display:grid;
   grid-template-rows: 105px auto; /*vai ter duas linhas, a primeira ocupa 105px de altura e a outra o restante da pagina */
   grid-template-areas: /*definir nomes-nomear para as linhas */
   

   "header" /*representa o header com 105px de altura */
   "content"; /*representa o resto do conteúdo  */

   > main {
      grid-area: content; /* o main vai valer o content, ou seja, o restando do contúdo*/
      overflow-y: scroll; /* adicionar scroll apenas no maim */
      padding: 64px 0;
   }
   
  
`;

export const Links = styled.ul`

list-style: none;

>li {
   margin-top: 12px;

   a{
      color: ${({theme}) => theme.COLORS.WHITE};
   }
}
`;

export const Content = styled.div`
max-width: 550px;
margin: 0 auto;
display: flex;
flex-direction: column;

> button:first-child{
   align-self: end;
}

> h1 {
   font-size: 36px;
   font-weight: 500;
   padding-top: 64px;
}

> p{
   font-size: 16px;
   margin-top: 16px;
   text-align: justify;
}


`;


