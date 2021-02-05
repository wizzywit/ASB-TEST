import { useMemo } from 'react'
import checkICON from '../../assets/svg/bullet.svg'
import bulletICON from '../../assets/svg/table-bullet.svg'
import optionICON from '../../assets/svg/option.svg'
import successICON from '../../assets/svg/success-arrow.svg'
import secondaryICON from '../../assets/svg/secondary-arrow.svg'
import dangerICON from '../../assets/svg/danger-arrow.svg'
import { useQuery } from 'react-query'
import { apiClient } from '../../service'
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
  const UserData = () => {
    return useQuery('table-data', async () => {
      try {
        const appArray = []
        const { data } = (
          await apiClient.get(
            'persons?_quantity=10&_gender=male&_birthday_start=2005-01-01'
          )
          ).data
        data?.forEach(item => {
          const { firstname, lastname, address } = item
          appArray.push({
            check: '',
            name: `${firstname} ${lastname}`,
            location: {
              state: address.country,
              address: `${address.buildingNumberber} ${address.streetName} ${address.street}`
            },
            status: [],
            entries: { count: 19, type: 'Homogenous' },
            risk: 1,
            action: ''
          })
        })
        return appArray
      } catch (e) {
        throw new Error(e)
      }
    })
    }
    const { data: tableData, isLoading } = UserData();
  const data = useMemo(
    () => tableData,
    [tableData]
  )
  const columns = useMemo(
    () => [
      {
        Header: '',
        accessor: 'check',
        Cell: ({ cell: { value } }) => {
          return <img src={checkICON} alt='' />
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
                <TableBullet src={bulletICON} alt='' />
                <TableSecText
                  nomargin
                  bold
                >{`${value.count} Unique Entries`}</TableSecText>
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
              <RiskArrow src={icon} risk={value} alt='' />
              <h2>{content}</h2>
            </RiskContainer>
          )
        }
      },
      {
        Header: '',
        accessor: 'action',
        Cell: ({ cell: { value } }) => {
          return <img src={optionICON} alt='' />
        }
      }
    ],
    []
  )
  return { columns, data, isLoading }
}

export default TableData
