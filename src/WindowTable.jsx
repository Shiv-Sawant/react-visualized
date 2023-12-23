import React from 'react'
import { FixedSizeList as List } from "react-window";

const WindowTable = () => {

    const Row = ({ index, style }) => (
        <tr className="row" style={style}>
            Row {index}
        </tr>
    );

    const StickyRow = ({ index, style }) => (
        <tr className="sticky" style={style}>
            <th>Sticky Row {index}</th>
        </tr>
    );

    const StickyList = ({ children, stickyIndices, ...rest }) => (
        <StickyListContext.Provider value={{ ItemRenderer: children, stickyIndices }}>
            <List itemData={{ ItemRenderer: children, stickyIndices }} {...rest}>
                {ItemWrapper}
            </List>
        </StickyListContext.Provider>
    );

    const ItemWrapper = ({ data, index, style }) => {
        const { ItemRenderer, stickyIndices } = data;
        if (stickyIndices && stickyIndices.includes(index)) {
            return null;
        }
        return <ItemRenderer index={index} style={style} />;
    };

    const innerElementType = forwardRef(({ children, ...rest }, ref) => (
        <StickyListContext.Consumer>
            {({ stickyIndices }) => (
                <table ref={ref} {...rest}>
                    {stickyIndices.map(index => (
                        <StickyRow
                            index={index}
                            key={index}
                            style={{ top: index * 35, left: 0, width: "100%", height: 35 }}
                        />
                    ))}

                    <tbody>
                        {children}
                    </tbody>
                </table>
            )}
        </StickyListContext.Consumer>
    ));

    return (
        <div>WindowTable</div>
    )
}

export default WindowTable