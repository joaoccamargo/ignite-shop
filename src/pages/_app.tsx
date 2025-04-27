import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
