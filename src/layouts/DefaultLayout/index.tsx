import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { ContentLayout } from './styles'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
    </div>
  )
}
