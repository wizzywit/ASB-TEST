import { useMemo } from 'react'
import checkICON from '../../assets/svg/bullet.svg'
import bulletICON from '../../assets/svg/table-bullet.svg'
import optionICON from '../../assets/svg/option.svg'
import successICON from '../../assets/svg/success-arrow.svg'
import secondaryICON from '../../assets/svg/secondary-arrow.svg'
import dangerICON from '../../assets/svg/danger-arrow.svg'
import {
  EntriesContainer,
  EntriesText,
  RiskArrow,
  TableBullet,
  TableMainText,
  TableSecText,
  TableStatusContainer,
  TableText,
  TableTextContainer,
  RiskContainer
} from './style'

const TableData = () => {
  const data = useMemo(
    () => [
      {
        check: '',
        name: 'Courtney Henry',
        location: { state: 'Lagos state', address: '775 Rolling Greeen Rd.' },
        status: [],
        entries: { count: 19, type: 'Homogenous' },
        risk: 1,
        action: ''
      },
      {
        check: '',
        name: 'Darrel Steward',
        location: { state: 'Lagos state', address: '775 Rolling Greeen Rd.' },
        status: ['Today', 'Another'],
        entries: { count: 19, type: 'Heterogenous' },
        risk: 2,
        action: ''
      },
      {
        check: '',
        name: 'Cody Fisher',
        location: { state: 'Lagos state', address: '775 Rolling Greeen Rd.' },
        status: [],
        entries: { count: 8, type: 'Homogenous' },
        risk: 2,
        action: ''
      },
      {
        check: '',
        name: 'Bessie Cooper',
        location: { state: 'Lagos state', address: '775 Rolling Greeen Rd.' },
        status: ['an issue'],
        entries: { count: 12, type: 'Heterogenous' },
        risk: 3,
        action: ''
      },
      {
        check: '',
        name: 'Annette Black',
        location: { state: 'Lagos state', address: '775 Rolling Greeen Rd.' },
        status: [],
        entries: { count: 13, type: 'Heterogenous' },
        risk: 1,
        action: ''
      },
      {
        check: '',
        name: 'Jenny Wilson',
        location: { state: 'Lagos state', address: '775 Rolling Greeen Rd.' },
        status: ['one', 'two', 'three', 'four', 'five'],
        entries: { count: 18, type: 'Homogenous' },
        risk: 3,
        action: ''
      },
      {
        check: '',
        name: 'Darlene Robertson',
        location: { state: 'Lagos state', address: '775 Rolling Greeen Rd.' },
        status: ['one', 'two'],
        entries: { count: 6, type: 'Homogenous' },
        risk: 2,
        action: ''
      },

      {
        check: '',
        name: 'Ralph Edwards',
        location: { state: 'Lagos state', address: '775 Rolling Greeen Rd.' },
        status: [],
        entries: { count: 14, type: 'Homogenous' },
        risk: 1,
        action: ''
      }
    ],
    []
  )
  const columns = useMemo(
    () => [
      {
        Header: '',
        accessor: 'check',
        Cell: ({ cell: { value } }) => {
          return <img src={checkICON} alt=""/>
        }
      },
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ cell: { value } }) => {
          return <TableMainText>{value}</TableMainText>
        }
      },
      {
        Header: 'Location',
        accessor: 'location',
        Cell: ({ cell: { value } }) => {
          return (
            <TableTextContainer>
              <TableSecText>{value.state}</TableSecText>
              <TableText>{value.address}</TableText>
            </TableTextContainer>
          )
        }
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ cell: { value } }) => {
          return (
            <TableStatusContainer status={value.length}>
              <h2>
                {value.length > 0
                  ? `${value.length} Issues found`
                  : 'No Issues'}
              </h2>
            </TableStatusContainer>
          )
        }
      },
      {
        Header: 'Entries',
        accessor: 'entries',
        Cell: ({ cell: { value } }) => {
          return (
            <TableTextContainer>
              <EntriesContainer>
                <TableBullet src={bulletICON} alt=""/>
                <TableSecText nomargin>{`${value.count} Unique Entries`}</TableSecText>
              </EntriesContainer>
              <EntriesText>{value.type}</EntriesText>
            </TableTextContainer>
          )
        }
      },
      {
        Header: 'Risk Profile',
        accessor: 'risk',
        Cell: ({ cell: { value } }) => {
          const icon =
            value === 1 ? successICON : value === 2 ? secondaryICON : dangerICON
          const content =
            value === 1 ? 'Low Risk' : value === 2 ? 'Mid Risk' : 'High Risk'
          return (
            <RiskContainer risk={value}>
              <RiskArrow src={icon} risk={value} alt=""/>
              <h2>{content}</h2>
            </RiskContainer>
          )
        }
      },
      {
        Header: '',
        accessor: 'action',
        Cell: ({ cell: { value } }) => {
          return <img src={optionICON} alt=""/>
        }
      }
    ],
    []
  )
  return { columns, data }
}

export default TableData
