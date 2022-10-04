import styled from "styled-components"

export const HeaderOfPage = styled.div `
    
    display: flex;
    align-items: center;
    justify-content: center;

   
    height: 12.5rem;
    width: 100%;

    background: ${(props) => props.theme['gray-700']};

    font-family: "Inter", sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
    color: ${(props) => props.theme['blue-300']};

    
    img {
        margin-right: 0.75rem;
    }

    span {
        color: ${(props) => props.theme['purple-700']};
    }
`
export const HeaderForm = styled.form `

    display: flex;
    align-content: center;
    justify-content: center;
    margin-top: -1.68rem;

    input {
        background: ${(props) => props.theme['gray-500']};
        width: 39.875rem;
        height: 3.25rem;
        padding: 1rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 400;
        color: ${(props) => props.theme['purple-300']};
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${(props) => props.theme['blue-700']};
        width: 5.625rem;
        height: 3.25rem;
        margin-left: 0.5rem;
        padding: 1rem;
        border-radius: 0.5rem;
        gap: 0.5rem;
        font-size: 1rem;
        font-weight: 400;

        color: ${(props) => props.theme['gray-100']};
    }

`

export const TaskHeader = styled.div `
   
    max-width: 46rem;
    margin: auto;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 4rem;
        font-size: 0.875rem;
        font-weight: 700;
    }

    span {
        color: ${(props) => props.theme['blue-300']};
    }

    #spanConcluida {
        color: ${(props) => props.theme['purple-300']};
    }

    strong {
        background: ${(props) => props.theme['gray-400']};
        width: 1.56rem;
        padding: 0.125rem 0.5rem;
        margin-left: 0.625rem;
        border-radius: 62.43rem;
    }
`

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

export const OnTask = styled.footer `
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    
    img {
        width: 1.25rem;
        height: 1.25rem;
        margin-left: 15px;
    }

    input[type="checkbox"] {
        width: 1.25rem;
        height: 1.25rem;
        outline: none;
        -webkit-appearance: none;
        background-color: ${(props) => props.theme['blue-700']};
        border-radius: 62.43rem;
        padding: 0.3125rem;
        margin-right: 15px;
    }

    input:checked[type="checkbox"]{
        background: ${(props) => props.theme['purple-700']};
    }


    input[type="checkbox"]::before{
        content: "";
        width: 0.625rem;
        height: 0.625rem;
        position: absolute;
        background: black;
        border-radius: 50%;
        box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.2);
        transform: scale(1.2);
        transition: .5s;
        cursor: pointer;
    }

    input:checked[type="checkbox"]::before{
        background-color: black;
    }

    p {
        font-weight: 400;
        font-size: 0.875rem;
        color: ${(props) => props.theme['gray-100']};
        line-height: 1.225rem;
        background: ${(props) => props.theme['gray-400']};
        width: 46rem;
        min-width: 18.75rem;
        height: auto;
        padding: 1rem;
        border-radius: 0.5rem;
    }
`











