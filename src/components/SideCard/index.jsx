import React from 'react'
import {
  Container,
  HeaderContainer,
  CardIconContainer,
  Content,
  HeaderTitle,
} from './style'

const SideCard = ({ icon, title, children, noBackground }) => {
  return (
    <Container noBackground={noBackground}>
      <HeaderContainer>
        <CardIconContainer>
          <img src={icon} />
        </CardIconContainer>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainer>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default SideCard
