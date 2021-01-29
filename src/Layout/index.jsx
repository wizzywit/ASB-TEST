import { useEffect, useState } from 'react'
import {
  BellContainer,
  ContentContainer,
  HeaderContainer,
  LogoContainer,
  LogoNavContainer,
  LogoText,
  MenuContainer,
  NotificationContainer,
  SearchField,
  SearchIcon,
  SearchInput,
  UserCircle,
  UserContainer
} from './style'
import LOGO from '../assets/svg/logo.svg'
import SearchICON from '../assets/svg/search.svg'
import BellLOGO from '../assets/svg/bell.svg'
import userLOGO from '../assets/svg/user.svg'
import arrowLOGO from '../assets/svg/arrow.svg'
import HomeICON from '../assets/svg/home.svg'
import HomeICON2 from '../assets/svg/home2.svg'
import entriesICON from '../assets/svg/entries.svg'
import entriesICON2 from '../assets/svg/entries2.svg'
import divisionICON from '../assets/svg/division.svg'
import divisionICON2 from '../assets/svg/division2.svg'
import Menu from '../components/Menu'
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'
import Divisions from '../pages/Divisions'
import BreadCrumbs from '../components/BreadCrumbs'

const Layout = () => {
  const menus = [
    { title: 'Home', icon: HomeICON, activeIcon: HomeICON2, url: '/home' },
    {
      title: 'Entries',
      icon: entriesICON,
      activeIcon: entriesICON2,
      url: '/entries'
    },
    {
      title: 'Divisions',
      icon: divisionICON,
      activeIcon: divisionICON2,
      url: '/divisions'
    }
  ]
  const match = useLocation()
  const [crumbs, setCrumbs] = useState([])
  useEffect(() => {
    console.log(match.pathname)
    setCrumbs(
      [...menus]
        .filter(elem => {
          return match.pathname.includes(elem.url)
        })
        .map(elem => elem.title)
    )
    console.log(crumbs)
  }, [match])

  return (
    <>
      <HeaderContainer>
        <LogoNavContainer>
          <LogoContainer>
            <img src={LOGO} alt='FE Engineer Test 1' />
            <LogoText>FE Engineer Test 1</LogoText>
          </LogoContainer>
          <MenuContainer>
            {menus?.map((menu, ind) => (
              <Menu
                key={ind}
                title={menu.title}
                icon={match.pathname === menu.url ? menu.activeIcon : menu.icon}
                active={match.pathname === menu.url ? true : false}
                url={menu.url}
              />
            ))}
          </MenuContainer>
        </LogoNavContainer>
        <NotificationContainer>
          <SearchField>
            <SearchInput />
            <SearchIcon src={SearchICON} alt=""/>
          </SearchField>
          <BellContainer src={BellLOGO} alt=""/>
          <UserContainer>
            <UserCircle>
              <img src={userLOGO} alt=""/>
            </UserCircle>
            <img src={arrowLOGO} alt=""/>
          </UserContainer>
        </NotificationContainer>
      </HeaderContainer>
      <ContentContainer>
        <BreadCrumbs crumbs={crumbs} />
        <Switch>
          <Route path='/home'>
            <Divisions />
          </Route>
          <Route path='/entries'>
            <Divisions />
          </Route>
          <Route path='/divisions'>
            <Divisions />
          </Route>
          <Route path='/'>
            <Redirect to='/divisions' />
          </Route>
        </Switch>
      </ContentContainer>
    </>
  )
}

export default Layout
