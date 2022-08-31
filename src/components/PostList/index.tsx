/* eslint-disable */
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import removeMarkdown from 'remove-markdown'

import { PostCard } from '../PostCard'

import { Container } from './styles'

interface Post {
  title: string
  number: string
  created_at: string
  body: string
}

interface PostListProps {
  posts: Post[]
}
export function PostList({ posts = [] }: PostListProps) {
  const formattedPosts = posts.map(({ title, number, created_at, body }) => {
    return {
      title,
      number,
      createdAt: formatDistanceToNow(new Date(created_at), {
        addSuffix: true,
        locale: ptBR,
      }),
      body: removeMarkdown(body).split('. ')[0],
    }
  })

  return (
    <Container>
      {formattedPosts.map((post) => (
        <PostCard
          key={post.number}
          number={post.number}
          title={post.title}
          createdAt={post.createdAt}
          description={post.body}
        />
      ))}
    </Container>
  )
}
