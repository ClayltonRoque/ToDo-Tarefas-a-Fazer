import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border:none;
    text-decoration: none;
}

body {
    background-color: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 140%;
}

@media (max-width: 1400px) {
    html {
        font-size: 100%;
    }
}

@media (max-width: 1250px) {
    html {
        font-size: 87.5%;
    }
}
 
@media (max-width: 1000px) {
    html {
        font-size: 70%;
    }
}

@media (max-width: 750px) {
    html {
        font-size: 52.5%;
    }
}

@media (max-width: 500px) {
    html {
        font-size: 35%;
    }
}

@media (max-width: 350px) {
    html {
        font-size: 25%;
    }
}

@media (max-width: 600px) {
    img {
        width: 25.5%;
    }
} 
`