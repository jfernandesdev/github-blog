import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  gap: 2rem;
  overflow: scroll;

  @media(max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    margin-top: 1rem;
  }
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
  background-color: ${(props) => props.theme['base-border']};
  background-size: cover;

  @media (max-width: 768px) {
    min-width: 100px;
    width: 100px;
    height: 100px;
  }
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  a {
    font-weight: 700;
    font-size: 0.75rem;
    transition: border 0.2s;
    white-space: nowrap;

    :hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const Description = styled.p`
  line-height: 160%;
  margin: 0.5rem 0 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
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

  @media (max-width: 768px) {
    span:nth-child(2) {
      display: none;
    }

    span {
      font-size: 0.8rem;
      white-space: nowrap;

      svg {
        width: 1rem;
        height: 1rem;
        fill: ${(props) => props.theme['base-label']};
      }
    }
  }
`
