import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { api } from '../../lib/api'

import { PostInfoHeader } from '../../components/PostInfoHeader'

import { PostContent } from './styles'

interface PostData {
  title: string
  number: number
  createdAt: string
  body: string
  author: string
  numberOfComments: number
  urlGithub: string
}

export function Post() {
  const [post, setPost] = useState<PostData>({} as PostData)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    async function loadPost() {
      const { data } = await api.get(
        `repos/${import.meta.env.VITE_GITHUB_REPOSITORY}/issues/${id}`,
      )

      const postData = {
        title: data.title,
        number: data.number,
        createdAt: formatDistanceToNow(new Date(data.created_at), {
          addSuffix: true,
          locale: ptBR,
        }),
        body: data.body,
        author: data.user.login,
        numberOfComments: data.comments,
        urlGithub: data.html_url,
      }

      setPost(postData)
    }

    loadPost()
  }, [id])

  return (
    <>
      <PostInfoHeader
        title={post.title}
        urlGithub={post.urlGithub}
        author={post.author}
        date={post.createdAt}
        comments={post.numberOfComments}
      />

      <PostContent>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </PostContent>
    </>
  )
}
