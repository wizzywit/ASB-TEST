import styled from 'styled-components'

export const TableContainerDiv = styled.div`
  width: 100%;
  overflow-x: auto;
  box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
`
export const TableContainer = styled.table`
  width: 100%;
  white-space: nowrap;
  border-spacing: 0px 0px;
  border-collapse: separate;
  margin-top: 0px;
  padding-top: 0px;
  thead {
    padding: 0px;
  }
`

export const TableHeader = styled.tr`
  background: #f3f6f9;

  th {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;

    color: #899198;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: left;
  }
  th:first-child {
    padding-left: 20px;
  }
  th:last-child {
    
  }
`
export const GreenText = styled.h2`
  margin: 0px;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 27px;
  color: ${({ color }) => (color ? color : '#3cb251')};
`

export const SubText = styled.p`
  margin: 0px;
  font-family: Mulish;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.171429px;

  color: #777474;
`
export const BulletIcon = styled.img`
  margin-right: 5px;

  margin-top: 15px;
`
export const TableText = styled.p`
  margin: 0px;
  font-family: Mulish;
  font-style: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.171429px;
  font-weight: ${({ weight }) => (weight ? weight : 'normal')};
  color: ${({ color }) => (color ? color : '#333333')};
`
export const TableRow = styled.tr`
  background: #ffffff;
  box-shadow: inset 0px -1px 0px rgba(183, 183, 183, 0.25);
  margin-top: 10px;
  height: 65px;
  td:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-left: 20px;
  }
  td:last-child {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    padding-right: 20px;
  }
  td {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 15px;
  }
`
