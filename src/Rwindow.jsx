import { faker } from '@faker-js/faker'
import React, { useEffect, useState } from 'react'
import { FixedSizeList as List } from "react-window";
// import AutoSizer from "react-virtualized-auto-sizer";



const Rwindow = () => {
    const [people, setPeople] = useState([])
    const [time, setTime] = useState(new Date())

    const Row = ({ index, style }) => (
        <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
            Row {index}
        </div>
    );

    useEffect(() => {
        setPeople(
            [...Array(100000).keys()].map((key) => {
                return {
                    id: key,
                    name: `${faker.person.firstName()}` + " " + `${faker.person.lastName()}`
                }
            })
        )
    }, [])
    return (
        <div>
            {/* <AutoSizer>
                {({ height, width }) => ( */}
                    <List
                        className="List"
                        height={200}
                        itemCount={1000}
                        itemSize={35}
                        width={200}
                    >
                        {Row}
                    </List>
                {/* )}
            </AutoSizer> */}
        </div>
    )
}

export default Rwindow