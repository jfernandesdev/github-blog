import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;
  padding: 2rem;
  height: 260px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: border 0.2s;

  :hover,
  :focus {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  header {
    display: flex;
    gap: 1rem;

    h4 {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      white-space: nowrap;
      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const Description = styled.span`
  color: ${(props) => props.theme['base-text']};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 160%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    -webkit-line-clamp: 3;
  }
`
