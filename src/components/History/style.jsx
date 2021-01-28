import styled from 'styled-components'

export const HistoryItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  /* padding: 12px 15px; */
  overflow: hidden;
`

export const Indicator = styled.div`
  margin-top: 4px;
  background: #707070;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  margin-right: 9px;
  display: grid;
  ${({ last }) =>
    !last
      ? ` &::before {
    position: absolute;
    content: '';
    top: 13px;
    left: 3.48px;
    height: 100%;
    z-index: 1;
    border: 1px dashed #c4c4c4;
  }`
      : ''}
`
export const HistoryBody = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const HistoryHeader = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 140%;
  color: #747474;
  margin: 0;
`
