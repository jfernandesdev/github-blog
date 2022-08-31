import { NavLink } from 'react-router-dom'
import { Container, Description } from './styles'

interface PostCardProps {
  number: string
  title: string
  createdAt: string
  description: string
}

export function PostCard({
  number,
  title,
  createdAt,
  description,
}: PostCardProps) {
  return (
    <NavLink to={`/post/${number}`}>
      <Container>
        <header>
          <h4>{title}</h4>
          <span>{createdAt}</span>
        </header>

        <Description>{description}</Description>
      </Container>
    </NavLink>
  )
}
