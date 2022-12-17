import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import * as S from "./Layout.style"

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <S.Layout>
      <Header />
      <S.main>{children}</S.main>
      <Footer />
    </S.Layout>
  );
};

export default Layout;