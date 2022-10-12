import styled from "styled-components";
// import theme from "../../styles/theme";
import {Link} from 'react-router-dom'

export const Container = styled.header`

    grid-area: header;  /* para separar o hedader dos demais */

    height: 105px;
    width:100%;

    
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    
    display:flex;
    justify-content: space-between;
    /* align-items:center; */

    padding: 0 80px;


    
`;

export const Profile = styled(Link)`
    display:flex;
    align-items: center;
    

    /* O sinal de maior é uma forma de garantir que a estilização
    só será aplicada na imagem do profile */
    > img {
        width: 56px;
        height: 56px;

        border-radius:50%;
    }
    > div{
        display: flex;
        flex-direction:column;
        margin-left: 16px;
        line-height: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
        
    }
`;

export const Logout =styled.button`
border: none;
background: none;

> svg {
    color: ${({ theme}) => theme.COLORS.GRAY_100};
    font-size: 36px;
}

`;