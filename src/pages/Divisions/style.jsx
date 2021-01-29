import styled from 'styled-components'
export const TableMainText = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #25213b;
  margin: 0px;
`
export const EntriesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 7px;
`
export const EntriesText = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #878592;
  margin: 0;
`
export const TableBullet = styled.img`
  margin-right: 5px;
  margin-left: 5px;
`
export const TableTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TableSecText = styled.h2`
  margin: 0;
  margin-bottom: ${({ nomargin }) => (nomargin ? '0' : '5px')};
  font-style: normal;
  font-weight: ${({ bold }) => (bold ? 'bold' : '500')};
  font-size: 12px;
  line-height: 15px;

  color: #25213b;
`
export const TableText = styled.h2`
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;

  color: #878592;
`
export const TableStatusContainer = styled.div`
  padding: 2px 12px 2px 12px;
  border-radius: 11px;
  width: fit-content;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    margin: 0;
  }
  ${({ status }) =>
    status > 0
      ? `
        background: #F6F3FF;
        h2{
            color: #8C70FF;
        }
    `
      : `
         background: #FFF6DE;
         h2{
            color: #F4B400;
        }
      `};
`
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
export const RiskArrow = styled.img`
  margin-right: 14px;
`

export const RiskContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h2 {
    font-style: normal;
    font-size: 14px;
    line-height: 18px;
    margin: 0;

    ${({ risk }) =>
        risk === 1
          ? `
        color: #3AB65C;
        font-weight: 500;
    `
          : risk === 2
          ? `
        color: #3C3AB6;
        font-weight: normal;
      `
          : `
        color: #B63A3A;
        font-weight: normal;
      `};
  }
`
