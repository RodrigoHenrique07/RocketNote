import { Container } from "./style";

export function Button ({title, loading, ...rest}){
    return(

    <Container 
    type="button"
    disabled={loading}
    {...rest}
    >
        {loading ? 'Carregando...' : title}
        
    </Container>
    )
}









































// import { Container } from "./style";

// export function Button(){

//     return(
//         <Container type="button"> 
//             Meu Botão
//         </Container>
//     )
// }