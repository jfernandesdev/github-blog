import {
  Container,
  ProfilePicture,
  HeaderCard,
  Description,
  FooterCard,
} from './styles'

import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from 'react-icons/fa'

interface User {
  avatar: string
  name: string
  urlGithub: string
  bio: string
  login: string
  company: string
  followers: number
}

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Container>
      <ProfilePicture src={user.avatar} />

      <div>
        <HeaderCard>
          <h1>{user.name}</h1>
          <a href={user.urlGithub} target="_blank" rel="noopener noreferrer">
            GITHUB <FaExternalLinkAlt />
          </a>
        </HeaderCard>

        <Description>{user.bio}</Description>

        <FooterCard>
          <span>
            <FaGithub />
            {user.login}
          </span>
          <span>
            <FaBuilding />
            {user.company ? user.company : '@Empresa'}
          </span>
          <span>
            <FaUserFriends />
            {user.followers > 0
              ? `${user.followers} seguidores`
              : `${user.followers} seguidor`}
          </span>
        </FooterCard>
      </div>
    </Container>
  )
}
