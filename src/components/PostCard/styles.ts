import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  height: 260px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 160%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
