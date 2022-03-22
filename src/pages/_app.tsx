import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import { theme } from 'styles/theme';
import { SidebarDrawerProvider } from 'contexts/SidebarDrawerContext';
import { makeServer } from 'services/mirage';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'services/queryClient';
import 'react-toastify/dist/ReactToastify.min.css';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
        <ToastContainer theme="colored" />
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
