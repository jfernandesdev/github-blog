import { PostCard } from '../../components/PostCard'
import { ProfileCard } from '../../components/ProfileCard'

import { PublicationsHeader, ListOfPosts, SearchField } from './styles'

export function Home() {
  return (
    <>
      <ProfileCard />

      <PublicationsHeader>
        <span>Publicações</span>
        <span>5 publicações</span>
      </PublicationsHeader>

      <SearchField placeholder="Buscar conteúdo" />

      <ListOfPosts>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </ListOfPosts>
    </>
  )
}
