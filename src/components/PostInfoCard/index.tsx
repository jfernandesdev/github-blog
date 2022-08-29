import { Container, HeaderCard, Title, FooterCard } from './styles'

import {
  FaChevronLeft,
  FaGithub,
  FaCalendarDay,
  FaExternalLinkAlt,
  FaComment,
} from 'react-icons/fa'

export function PostInfoCard() {
  return (
    <Container>
      <HeaderCard>
        <a href="/">
          <FaChevronLeft /> VOLTAR
        </a>

        <a
          href="https://github.com/jfernandesdev"
          target="_blank"
          rel="nofollow noreferrer"
        >
          VER NO GITHUB <FaExternalLinkAlt />
        </a>
      </HeaderCard>

      <Title>JavaScript data types and data structures</Title>

      <FooterCard>
        <span>
          <FaGithub />
          jfernandesdev
        </span>
        <span>
          <FaCalendarDay />
          Há 1 dia
        </span>
        <span>
          <FaComment />5 comentários
        </span>
      </FooterCard>
    </Container>
  )
}
