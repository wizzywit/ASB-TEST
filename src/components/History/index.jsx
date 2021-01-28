import {
  HistoryItem,
  Indicator,
  HistoryBody,
  HistoryHeader,
} from './style'

const History = ({ title, children, last }) => {
  return (
    <HistoryItem>
      <Indicator last={last}></Indicator>
      <HistoryBody>
        <HistoryHeader>{title}</HistoryHeader>
        {children}
      </HistoryBody>
    </HistoryItem>
  )
}

export default History
