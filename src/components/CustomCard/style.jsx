import styled from 'styled-components'

export const CardContainer = styled.div`
  flex-basis: 18.5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
  border-radius: 6px;
`

export const CardContent = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 32px;
  margin-bottom: 17px;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
`

export const NumberData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NumberDataText = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  color: #19191d;
  margin: 0;
`

export const DataInfo = styled.h2`
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 36px;
  color: #9696a0;
`

export const InfoLogoContainer = styled.div`
  border: 2px solid #b4b4bb;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 23px;
  width: 23px;

  .hi {
    height: 7px;
    width: 2px;
    background:#B4B4BB;
    margin-top: 3px;
    border-radius: 1px;
  }

  .ellipse {
    height: 2px;
    width: 2px;
    border: 1px solid #b4b4bb;
    box-sizing: border-box;
    border-radius: 50%;
  }
`
