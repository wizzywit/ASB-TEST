import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  padding: 0px 26px 0px 26px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: inset 0px -1px 0px rgba(220, 225, 231, 0.572143);
`

export const LogoNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 50px;
`

export const SearchField = styled.div`
  position: relative;
  height: 36px;
  width: 176px;
  display: flex;
  background: #ffffff;
  border: none;
`
export const SearchInput = styled.input`
  width: 100%;
  margin: 0px;
  padding-left: 37px;
  border: 1px solid #dce1e7;
  border-radius: 4px;
  outline: none;
  &:focus {
    outline: none;
  }
`

export const SearchIcon = styled.img`
  position: absolute;
  top: 11px;
  left: 16px;
`

export const NotificationContainer = styled.div`
  display: flex;
`
export const LogoText = styled.h2`
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
`

export const BellContainer = styled.img`
    margin-left: 32px;
    margin-right: 32px;
`
export const UserCircle = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin-right: 7px;
    background: #D8D8D8;
    border-radius: 50%;
`

export const UserContainer = styled.div`
    display: flex;
`

export const MenuContainer = styled.div`
    display: flex;
`

export const ContentContainer = styled.div`
  margin: 15px 28px 50px 18px;
  display: flex;
  flex-direction: column;
`
