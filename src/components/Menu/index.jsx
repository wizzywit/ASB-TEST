import { Icon, IconTitle, MenuContainer } from './style'
import { Link} from 'react-router-dom'

const Menu = ({ active, title, icon, url }) => {
  return (
    <Link to={url} style={{ display: 'flex', textDecoration: 'none', height: '100%' }}>
      <MenuContainer active={active}>
        <Icon src={icon} alt={title} />
        <IconTitle active={active}>{title}</IconTitle>
      </MenuContainer>
    </Link>
  )
}

export default Menu
