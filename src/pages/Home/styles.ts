import styled from 'styled-components'

export const ListOfPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
`

export const PublicationsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4.5rem 0 0.75rem;
  color: ${(props) => props.theme['base-span']};
  font-size: 0.875rem;
  line-height: 160%;

  span:nth-child(1) {
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 768px) {
    margin-top: 2.5rem;
  }
`

export const SearchField = styled.input`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  padding: 1rem 0.75rem;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
