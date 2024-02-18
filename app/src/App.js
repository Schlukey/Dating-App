import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/index';
import { Router } from './router/index.js'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
