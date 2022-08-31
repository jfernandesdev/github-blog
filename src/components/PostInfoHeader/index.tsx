import { NavLink } from 'react-router-dom'
import { Container, HeaderCard, Title, FooterCard } from './styles'

import {
  FaChevronLeft,
  FaGithub,
  FaCalendarDay,
  FaExternalLinkAlt,
  FaComment,
} from 'react-icons/fa'

interface PostInfoHeaderProps {
  title: string
  urlGithub: string
  author: string
  date: string
  comments: number
}
export function PostInfoHeader({
  title,
  urlGithub,
  author,
  date,
  comments,
}: PostInfoHeaderProps) {
  return (
    <Container>
      <HeaderCard>
        <NavLink to="/">
          <FaChevronLeft /> VOLTAR
        </NavLink>

        <a href={urlGithub} target="_blank" rel="nofollow noreferrer">
          VER NO GITHUB <FaExternalLinkAlt />
        </a>
      </HeaderCard>

      <Title>{title}</Title>

      <FooterCard>
        <span>
          <FaGithub />
          {author}
        </span>
        <span>
          <FaCalendarDay />
          {date}
        </span>
        <span>
          <FaComment />
          {comments} comentário(s)
        </span>
      </FooterCard>
    </Container>
  )
}
