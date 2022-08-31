import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from '../../hooks/useDebounce'

import { api } from '../../lib/api'

import { UserCard } from '../../components/UserCard'
import { PostList } from '../../components/PostList'

import { PublicationsHeader, SearchField } from './styles'

interface User {
  avatar: string
  name: string
  urlGithub: string
  bio: string
  login: string
  company: string
  followers: number
}

export function Home() {
  const [user, setUser] = useState<User>({} as User)
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)

  async function fetchPosts(q: string) {
    const { data } = await api.get(`search/issues`, {
      params: {
        q: `repo:${import.meta.env.VITE_GITHUB_REPOSITORY} ${q}`,
      },
    })

    return data
  }

  const { data } = useQuery(['post', debouncedSearch], () =>
    fetchPosts(debouncedSearch),
  )

  useEffect(() => {
    async function loadUser() {
      const { data } = await api.get(
        `/users/${import.meta.env.VITE_GITHUB_USERNAME}`,
      )

      const userData = {
        avatar: data.avatar_url,
        name: data.name,
        urlGithub: data.html_url,
        bio: data.bio,
        login: data.login,
        company: data.company,
        followers: data.followers,
      }
      setUser(userData)
    }

    loadUser()
  }, [])

  return (
    <>
      <UserCard user={user} />

      <PublicationsHeader>
        <span>Publicações</span>
        <span>{data?.total_count && `${data?.total_count} post(s)`}</span>
      </PublicationsHeader>

      <SearchField
        type="search"
        name="search"
        placeholder="Buscar conteúdo"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        autoComplete="off"
      />

      <PostList posts={data?.items} />
    </>
  )
}
