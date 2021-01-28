import React from 'react'
import {
  CardContainer,
  CardContent,
  DataInfo,
  InfoLogoContainer,
  NumberData,
  NumberDataText
} from './style'

const CustomCard = ({ number, info }) => {
  return (
    <CardContainer>
      <CardContent>
        <NumberData>
          <NumberDataText>{number}</NumberDataText>
          <InfoLogoContainer>
            <div className='ellipse'></div>
            <div className='hi'></div>
          </InfoLogoContainer>
        </NumberData>
        <DataInfo>{info}</DataInfo>
      </CardContent>
    </CardContainer>
  )
}

export default CustomCard
