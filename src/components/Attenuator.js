import React, { Fragment } from 'react';

const Attenuator = (props) => {
    console.log('Attenuator', {props});

      const { x1, x2, y1, y2, width, divisions } = props;
      let xSize = x2 - x1;
      let ySize = y2 - y1;
      if (!xSize) {
        xSize = 0.1;
      }
      if (!ySize) {
        ySize = 0.11;
      }
      let slope = ySize / xSize;
  
      const perpSlope = -1 * (1 / slope);
      let linepoints = [];
      let points = [];
  
      for (let i = 0; i < divisions; i++) {
        let tempx = x1 + xSize / divisions * i;
        let tempy = y1 + slope * xSize / divisions * i;
        let zig = i % 2;
        console.log({
          y1,
          x1,
          y2,
          x2,
          zig,
          width,
          tempy,
          slope,
          xSize,
          perpSlope
        });
        if (zig) {
          linepoints.push(`L${tempx - width} ${tempy - perpSlope * width} `);
        } else {
          linepoints.push(`L${tempx + width} ${tempy + perpSlope * width} `);
        }
      }
      return (
          <Fragment>
        <g>
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            strokeWidth={"3"}
            stroke={"white"}
          />
  
          <path
            fill="none"
            stroke="black"
            strokeWidth="2"
            d={`M${x1} ${y1} ${linepoints.join("")} L${x2} ${y2}`}
          />
        </g>
        </Fragment>
      );
  }

  export default Attenuator;