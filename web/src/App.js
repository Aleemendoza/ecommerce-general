import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
// import { BrowserRouter, Route } from "react-router-dom";
import NavBar from '../../web/src/components/utils/navbar/NavBar.jsx'
import Navbar2 from './components/utils/navbar/Navbar2.jsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
     
          {/* <Route path="/" component={NavBar} /> */}
          {/* <NavBar/> */}
          <Navbar2/>
      
      </Box>
    </ChakraProvider>
  );
}

export default App;
