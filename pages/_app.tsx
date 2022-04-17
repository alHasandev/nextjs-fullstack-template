import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  console.assert(Component.getLayout, 'Get Layout Not Exist');

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
