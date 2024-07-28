import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { ChakraProvider } from '@chakra-ui/react';
import SearchProvider from './provider/SearchProvider.tsx';
import ApiCityProvider from './provider/ApiCityProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchProvider>
      <ApiCityProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
      </ApiCityProvider>
    </SearchProvider>
  </React.StrictMode>
);
