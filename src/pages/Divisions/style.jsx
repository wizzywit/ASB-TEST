import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`
export const Section = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CardSection = styled.div`
  flex-basis: 18.5%;
`
export const TableSection = styled.div`
  flex-basis: 80%;
`
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  width: 15px;
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const Text = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: ${({ link }) => (link ? '#5771EE' : '#0f1a4f')};
  margin: 0;
`

export const SingleInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`
export const HistoryDateContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
  justify-content: flex-start;
  align-items: center;
  .bullet {
    width: 4px;
    height: 4px;
    border: 2px solid #c4c4c4;
    box-sizing: border-box;
    margin-left: 6px;
    margin-right: 6px;
    border-radius: 50%;
  }
`

export const DateText = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 140%;
  color: #a1aace;
  margin: 0;
`
