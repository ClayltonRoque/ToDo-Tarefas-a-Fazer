import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import React from 'react'

export function App() {
  return (
    <div>
    <ThemeProvider theme={defaultTheme}>
        <Header />
        <GlobalStyle />
    </ThemeProvider>
    </div>
  )
}
