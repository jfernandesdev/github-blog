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

export function ProfileCard() {
  return (
    <Container>
      <ProfilePicture src="https://github.com/jfernandesdev.png" />

      <div>
        <HeaderCard>
          <h1>Jeferson Fernandes</h1>
          <a
            href="https://github.com/jfernandesdev"
            target="_blank"
            rel="nofollow noreferrer"
          >
            GITHUB <FaExternalLinkAlt />
          </a>
        </HeaderCard>

        <Description>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Description>

        <FooterCard>
          <span>
            <FaGithub />
            jfernandesdev
          </span>
          <span>
            <FaBuilding />
            @Empresa
          </span>
          <span>
            <FaUserFriends />
            21 seguidores
          </span>
        </FooterCard>
      </div>
    </Container>
  )
}
