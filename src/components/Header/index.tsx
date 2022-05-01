/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'

import Link from './Link'
import { Container, Header as HeaderStyled, Nav } from './styles'

export function Header() {
  return (
    <HeaderStyled>
      <Container>
        <Link href="/">
          <a>
            <Image src="/LogoHighlanderTech.png" alt="Highlander Tech" height={28} width={193} />
          </a>
        </Link>
        <Nav>
          <Link href="/">Home</Link>
          <Link href="/quem-somos">Quem Somos</Link>
          <Link href="/contato">Contato</Link>
        </Nav>
      </Container>
    </HeaderStyled>
  )
}
