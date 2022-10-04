import styled from "styled-components"

export const NoTask = styled.footer `

    border-top: 0.0625rem solid ${(props) => props.theme['gray-400']};
    margin-top: 0.9375rem; 
    padding: 0.9375rem 0.125rem 0.125rem;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-weight: 700;
        font-size: 1rem;
        color: ${(props) => props.theme['gray-200']};
    }

    img {
        margin-left: 7.81rem;
        margin-bottom: 1rem;
        margin-top: 4rem;
    }

    #footerNoTask p {
        font-weight: 400;
        font-size: 1rem;
        color: ${(props) => props.theme['gray-300']};
        line-height: 1.4rem;
    }
`