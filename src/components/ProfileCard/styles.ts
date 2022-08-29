import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  gap: 2rem;
`

interface ProfilePictureProps {
  src: string
}

export const ProfilePicture = styled.div<ProfilePictureProps>`
  min-width: 148px;
  width: 148px;
  height: 148px;
  border-radius: 8px;

  background: ${(props) =>
    props.src && `url(${props.src}) no-repeat center center`};
  background-size: cover;
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;
  }
`

export const Description = styled.p`
  line-height: 160%;
  margin: 0.5rem 0 1.5rem;
`

export const FooterCard = styled.footer`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 160%;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      fill: ${(props) => props.theme['base-label']};
    }
  }
`
