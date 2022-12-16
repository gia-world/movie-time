import Link from 'next/link';
import React from 'react'
import * as S from "./Header.style";

const Header = () => {
  return (
    <S.Header>
      <Link href="/">Home</Link>
      <Link href="/nomad">Nomad</Link>
      <Link href="/kobis">영화진흥위원회</Link>
      <Link href="/tmdb">tmdb</Link>
      
    </S.Header>
  )
}

export default Header