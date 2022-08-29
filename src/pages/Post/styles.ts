import styled from 'styled-components'

export const PostContent = styled.div`
  padding: 1.5rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }

  p {
    line-height: 160%;
    margin: 1rem 0;
  }

  a {
    line-height: 160%;
    margin: 1rem 0;
    text-decoration: underline;
    text-underline-position: under;
  }
`
