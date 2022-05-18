import React from 'react';
import styled from 'styled-components';

interface CGridProps {};

interface CGridState {};

const Wrapper = styled.div<CGridProps>`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: minmax(150px, auto);
`;

export default class CGrid extends React.Component <CGridProps, CGridState> {
    render() {
        const {...rest} = this.props;

        return (
            <Wrapper {...rest}>
                <div style={{ backgroundColor: "yellow" }}>tes 1</div>
                <div style={{ backgroundColor: "yellow" }}>tes 2</div>
                <div style={{ backgroundColor: "yellow" }}>tes 3</div>
                <div style={{ backgroundColor: "yellow" }}>tes 4</div>
                <div style={{ backgroundColor: "yellow" }}>tes 5</div>
                <div style={{ backgroundColor: "yellow" }}>tes 5</div>
                <div style={{ backgroundColor: "yellow" }}>tes 5</div>
                <div style={{ backgroundColor: "yellow" }}>tes 5</div>
                <div style={{ backgroundColor: "yellow" }}>tes 5</div>
            </Wrapper>
        );
    };
};