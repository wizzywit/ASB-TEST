import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  ${({ noBackground }) =>
    noBackground ? '' : 'box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);'}
  border-radius: 6px;
  padding-top: 12px;
  padding-left: 12px;
  margin-bottom: 24px;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const CardIconContainer = styled.div`
  background: #00a2d6;
  border-radius: 6.32653px;
  margin-right: 15px;
  width: 31px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HeaderTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  color: black;
  margin: 0px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 21px;
  padding-bottom: 33px;
`

