import styled from "styled-components";

export const OnTask = styled.footer `  
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1 ;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  
    img {
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        margin-left: 21.875rem;
    }

    p {
        word-wrap: break-word;
        font-weight: 400;
        font-size: rem;
        color: ${(props) => props.theme['gray-100']};
        line-height: 1.225rem;
        background: ${(props) => props.theme['gray-400']};
        width: 46rem;
        padding: 1rem 3rem;
        border-radius: 0.5rem;
    }

    input[type="checkbox"] {
        position: absolute;
        margin-right: 43.75rem;
        width: 1.25rem;
        height: 1.25rem;
        outline: none;
        -webkit-appearance: none;
        border-radius: 62.43rem;
        background-color: ${(props) => props.theme['gray-400']};
        background-repeat: no-repeat;
        background-position: center;
        background-size: 1.25rem;
    }

    input:checked[type="checkbox"]{
        background: ${(props) => props.theme['purple-700']};
        background-repeat: no-repeat;
        background-position: center;
        background-size: 0.75rem;
    }
`