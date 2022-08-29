import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  gap: 0.5rem;

   @media(max-width: 768px) {
    padding: 1rem;
    margin-top: 1rem;
  }
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  a {
    font-weight: 700;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    :hover {
      border-color: ${(props) => props.theme.blue};
    }
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

export const FooterCard = styled.footer`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: ${(props) => props.theme['base-span']};

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
    }
  }

  @media (max-width: 768px) {
    span:nth-child(1) {
      display: none;
    }

    span {
      font-size: 0.85rem;

      svg {
        width: 0.85rem;
        height: 0.85rem;
      }
    }
  }
`
