import React, {Fragment} from 'react';

const Amplifier = (props) => {
    console.log('Amplifier', {props});
      const { x1, x2, y1, y2, width, divisions } = props;
      const xSize = x2 - x1;
      const ySize = y2 - y1;
      const slope = ySize / xSize;
      const perpSlope = -1 * (1 / slope);
  
      let triangle = `M${x1} ${y1} L${x1 - width} ${y1 -
        perpSlope * width} L${x2} ${y2} L${x1 + width} ${y1 +
        perpSlope * width} Z `;
        console.log({triangle});
  
      return (
        <g>
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            strokeWidth={"3"}
            stroke={"white"}
          />
  
          <path fill="none" stroke="black" strokeWidth="2" d={triangle} />
        </g>
      );
  }

  export default Amplifier;