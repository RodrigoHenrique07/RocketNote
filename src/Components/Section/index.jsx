import { Container } from "./style";

export function Section ({ title, children }){



    return(
        <Container>
            <h2>{title}</h2>
            {children} {/*  o children são elementos filhos que podem ser alterados*/}
        </Container>
    )
};

