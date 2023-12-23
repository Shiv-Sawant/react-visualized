// import Chance  from 'chance'
import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import List from 'react-virtualized/dist/commonjs/List';
import Table, { Column, AutoSizer } from 'react-virtualized/dist/commonjs/Table';
// import { AutoSizer } from 'react-virtualized';

const Vis = () => {
  const [people, setPeople] = useState([])
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setPeople(
      [...Array(1000).keys()].map((key) => {
        return {
          id: key,
          name: `${faker.person.firstName()}` + " " + `${faker.person.lastName()}`
        }
      })
    )
  }, [])

  // const list = [
  //   {
  //     scrip: 'person one',
  //     currentPrice: "person description",
  //     decription: "person description",
  //     decription: "person description",
  //     decription: "person description",
  //     decription: "person description",
  //   }
  // ]

  return (
    <div>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '', textAlign: 'center' }}>first head</th>
            <th>second head</th>
            <th>third head</th>
            <th>fourth head</th>
            <th>fifth head</th>
            <th>six head</th>
          </tr>
        </thead>
      </table>
      <table>
        <tbody>
          <List
            width={1900}
            height={600}
            rowHeight={50}
            rowCount={people.length}
            rowRenderer={({ key, index, style, parent }) => {
              console.log(index, "index")
              const persion = people[index]
              return (
                <tr style={{ width: '100%', textAlign: 'center' }}>
                  <td style={{ width: '550px' }} key={key}>{persion.name}</td>
                  <td style={{ width: '550px' }} key={key}>{persion.name}</td>
                  <td style={{ width: '550px' }} key={key}>{persion.name}</td>
                  <td style={{ width: '550px' }} key={key}>{persion.name}</td>
                  <td style={{ width: '550px' }} key={key}>{persion.name}</td>
                  <td style={{ width: '550px' }} key={key}>{persion.name}</td>
                </tr>
              )
            }}
          />
        </tbody>
      </table>
      {/* <Table
        width={300}
        height={300}
        headerHeight={20}
        rowHeight={30}
        rowCount={people.length}
        rowGetter={({ index }) => people[index]}>
        <Column
          label="Name"
          dataKey="name"
          width={100}
          cellRenderer={({ cellData }) => {
            return (

              <span style={{ backgroundColor: 'red' }}>{cellData}</span>
            )
          }
          }
        />
      </Table>, */}

    </div>
  )
}

export default Vis