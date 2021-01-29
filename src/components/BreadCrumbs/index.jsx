import { CrumbArrow, CrumbsContainer, CrumbText } from './style'
import CrumbARROW from '../../assets/svg/crumbs-arrow.svg'
const BreadCrumbs = ({ crumbs }) => {
  return (
    <CrumbsContainer>
      {crumbs?.map(crumb => (
        <>
              <CrumbText>{crumb}</CrumbText>
              <CrumbArrow src={CrumbARROW}/>
        </>
      ))}
      <CrumbText>Module</CrumbText>
    </CrumbsContainer>
  )
}

export default BreadCrumbs
