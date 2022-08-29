import styled from 'styled-components'

import BackgroundHeader from '../../assets/header-background.svg'

export const HeaderContainer = styled.div`
  height: 269px;
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  background: url(${BackgroundHeader});
  background-size: cover;

  @media (max-width: 768px) {
    height: 200px;
    padding-top: 2rem;
  }
`
