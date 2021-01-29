import React from 'react'
import CustomCard from '../../components/CustomCard'
import SideCard from '../../components/SideCard'
import {
  CardsContainer,
  CardSection,
  Section,
  TableSection,
  IconWrapper,
  Text,
  SingleInfo,
  HistoryDateContainer,
  DateText
} from './style'
import summaryICON from '../../assets/svg/summary.svg'
import speakerICON from '../../assets/svg/speaker.svg'
import callerICON from '../../assets/svg/caller.svg'
import mailICON from '../../assets/svg/mail.svg'
import locationICON from '../../assets/svg/location.svg'
import entryICON from '../../assets/svg/entry.svg'
import fingerPrintICON from '../../assets/svg/finger-print.svg'
import { Link } from 'react-router-dom'
import History from '../../components/History'
import Table from '../../components/Table'
import TableData from './table.data'

const Divisions = () => {
  const cards = [
    { number: '31454', info: 'Ongoing metric' },
    { number: '2344', info: 'Past metric' },
    { number: '14224', info: 'Missed metric' },
    { number: '635', info: 'Failed metric' },
    { number: '11334', info: 'Pending metric' }
  ]
  const infos = [
    { icon: callerICON, info: '0801 234 5678', link: false },
    { icon: mailICON, info: 'asbfefr@gmail.com', link: false },
    { icon: locationICON, info: 'Mojidi, Lagos', link: false },
    { icon: entryICON, info: '2 Journal entries', link: true, url: '/' },
    { icon: fingerPrintICON, info: '24 fingerprints enrolled', link: false }
  ]
  const histry = [
    {
      title: `Searched "Journal Entries" on Division Module`,
      timestamp: '22:10 15/09/2020'
    },
    {
      title: `Searched "Fingerprint record" on Division Module`,
      timestamp: '22:10 15/09/2020'
    },
    {
      title: `Searched "Journal Entries" on Division Module`,
      timestamp: '22:10 15/09/2020'
    }
  ]
  const { columns, data } = TableData()
  return (
    <>
      <CardsContainer>
        {cards?.map(card => (
          <CustomCard number={card.number} info={card.info} />
        ))}
      </CardsContainer>
      <Section>
        <CardSection>
          <SideCard icon={summaryICON} title='Division Summary'>
            {infos?.map((info, ind) => (
              <SingleInfo key={ind}>
                <IconWrapper>
                  <img src={info.icon} alt=""/>
                </IconWrapper>
                {info.link === true ? (
                  <Link to={info.url}>
                    <Text link>{info.info}</Text>
                  </Link>
                ) : (
                  <Text>{info.info}</Text>
                )}
              </SingleInfo>
            ))}
          </SideCard>
          <SideCard icon={speakerICON} title='Module History' noBackground>
            {histry?.map((elem, ind) => (
              <History
                key={ind}
                title={elem.title}
                last={ind === histry.length - 1}
              >
                <HistoryDateContainer>
                  <DateText>{elem.timestamp}</DateText>
                  <div className='bullet'></div>
                  <DateText>Web</DateText>
                </HistoryDateContainer>
              </History>
            ))}
          </SideCard>
        </CardSection>
        <TableSection>
          <Table data={data} columns={columns} />
        </TableSection>
      </Section>
    </>
  )
}

export default Divisions
