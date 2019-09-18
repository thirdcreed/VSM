import React, { Fragment } from 'react';
const Operation = (props) =>  {
    console.log('Operation', {props});
      let { x, y, width, height } = props;
      return (
        <rect
          height={height}
          x={x}
          y={y}
          width={width}
          strokeWidth={"2"}
          fill={"none"}
          stroke={"black"}
        />
      );
  }

  export default Operation;