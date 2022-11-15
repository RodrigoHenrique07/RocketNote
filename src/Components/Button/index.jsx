import { Container } from "./style";

export function Button ({title, icon:Icon, loading, ...rest}){
    return(

    <Container 
    type="button"
    disabled={loading}
    
    {...rest}
    >
        {Icon && <Icon  size={20} />}
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