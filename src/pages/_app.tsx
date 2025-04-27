import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { Roboto } from 'next/font/google'
import logoSvg from '../assets/logo.svg'
import Image from "next/image";
import { Container, Header } from "@/styles/pages/app";

globalStyles();

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {  
  return (
    <Container>
    <Header>
       <Image src={logoSvg} alt=""/>
    </Header>
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
    </Container>
  );
}
