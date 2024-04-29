import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

import { TanStackProvider } from './plugins';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TanStackProvider>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </TanStackProvider>
  </React.StrictMode>
);
