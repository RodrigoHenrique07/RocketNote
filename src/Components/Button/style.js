import styled from "styled-components";




export const Container = styled.button`
width:100%;
background-color: ${({ theme }) => theme.COLORS.ORANGE};
color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

height: 56px;
border: 0;
padding: 0 16px;

border-radius: 10px;
font-weight: 500;
margin-top: 16px;

&:disabled{
    opacity: 0.5;
}


`;






// Importar o styled-componntes
// Criar uma const com o tipo de componente e as estilizações e exportrar ela




































// import styled from "styled-components";

// export const Container = styled.button`

// width:100%;
// background-color: ${({theme}) => theme.COLORS.ORANGE};
// color: ${({theme}) => theme.COLORS.BACKGROUND_800};

// height: 56px;
// border: 0;
// padding: 0 16px;
// margin-top: 16px;
// border-radius: 10px;
// font-weight: 500;

// &:disabled{
//     opacity: 0.5;
// }
// `

