import React, { Fragment } from 'react';
import panAndZoomHoc from 'react-pan-and-zoom-hoc';
import {ToolConsumer} from './MainPage'
import styled from 'styled-components';



let DrawingBoard = styled.div`
cursor: ${props => props.cursor}
`;

const Canvas = (props) => {
    const {x, y, scale, width, height, onPanMove, ...other} = props;
    
    console.log(scale);
    return (
    <ToolConsumer>{({tool}) => (
    <DrawingBoard cursor={tool}>
      <svg style={{transform: `scale(${scale}, ${scale}) translate(${(0.5 - x) * width}px, ${(0.5 - y) * height}px`}} 
        width={width} 
        height={height} 
        {...other}>
        {props.children}
        </svg>
      </DrawingBoard>)}</ToolConsumer>
      );

  
}

export default panAndZoomHoc(Canvas);


