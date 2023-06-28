import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import NavBar from './components/NavBar/NavBar.tsx'
import Like from './components/Like/Like.tsx'
import Game from './components/Game/Game.tsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <App/>
    <NavBar/>
    <Like/>
    <Game/>
  </ChakraProvider>,
)
