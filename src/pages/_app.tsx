import React from "react";
import { globalStyles } from "../styles/global";
import LogoImage from "../assets/logo.svg";
import Image from "next/image";
import { Container, Header } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Header>
        <Image src={LogoImage} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
