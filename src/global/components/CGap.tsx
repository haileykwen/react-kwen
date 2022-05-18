import React from 'react';

interface CGapProps {
    height?: string;
    width?: string;
};

interface CGapState {};

export default class CGap extends React.Component <CGapProps, CGapState> {
    render() {
        return (
            <div style={{ height: this.props.height, width: this.props.width }}/>
        );
    };
};