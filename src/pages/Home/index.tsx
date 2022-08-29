import { ListOfPosts } from './styles'

import { PostCard } from '../../components/PostCard'
import { ProfileCard } from '../../components/ProfileCard'

export function Home() {
  return (
    <>
      <ProfileCard />

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
