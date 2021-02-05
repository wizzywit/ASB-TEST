import { CrumbArrow, CrumbsContainer, CrumbText } from './style'
import CrumbARROW from '../../assets/svg/crumbs-arrow.svg'
const BreadCrumbs = ({ crumbs }) => {
  return (
    <CrumbsContainer>
      {crumbs?.map((crumb, ind) => (
          <div className="bread" key={ind}>
              <CrumbText>{crumb}</CrumbText>
              <CrumbArrow src={CrumbARROW}/>
        </div>
      ))}
      <CrumbText>Module</CrumbText>
    </CrumbsContainer>
  )
}

export default BreadCrumbs
