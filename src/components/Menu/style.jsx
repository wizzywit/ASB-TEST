import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 15px;
  background: ${({ active }) => (active ? '#DEEFFF' : '#fff')};
  border-bottom: ${({ active }) => (active ? '4px solid #006FD6' : 'none')};
  .link{
      text-decoration: none;
      display: flex;
  }
`

export const Icon = styled.img`
  margin-right: 9.2px;
`

export const IconTitle = styled.h2`
  font-style: normal;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  font-size: 14px;
  line-height: 22px;
  margin: 0px;
  color: ${({ active }) => (active ? '#006FD6' : '#778699')};
`
