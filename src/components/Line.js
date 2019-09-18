import React, { Fragment } from 'react';
import Attenuator from './Attenuator';
import Amplifier from './Amplifier';

const Line = (props) => {
 
      const caps = {
        open: { fill: "white", strokeWidth: "2" },
        closed: { fill: "black" }
      };
      const { decorators, x1, y1, x2, y2, dashed } = props;
      const xSize = x2 - x1;
      const ySize = y2 - y1;
      const slope = ySize / xSize;
      function toDecoratorElems(decorator) {
        if (decorator.type == "attenuator") {
          return (
            <Attenuator
              x1={x1 + xSize * decorator.starts}
              y1={y1 + ySize * decorator.starts}
              x2={x1 + xSize * decorator.ends}
              y2={y1 + ySize * decorator.ends}
              divisions={10}
              width={5}
            />
          );
        }
        if (decorator.type == "amplifier") {
          return (
            <Amplifier
              x1={x1 + xSize * decorator.starts}
              y1={y1 + ySize * decorator.starts}
              x2={x1 + xSize * decorator.ends}
              y2={y1 + ySize * decorator.ends}
              width={10}
            />
          );
        }
        if (decorator.type == "open") {
          return (
            <circle
              cx={x1 + xSize * decorator.at}
              cy={y1 + ySize * decorator.at}
              r="5"
              stroke="black"
              strokeWidth="2"
              fill="white"
            />
          );
        }
        if (decorator.type == "closed") {
          return (
            <circle
              cx={x1 + xSize * decorator.at}
              cy={y1 + ySize * decorator.at}
              r="5"
              stroke="black"
              strokeWidth="3"
              fill="black"
            />
          );
        }
      }
      let line = (
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          strokeWidth={"2"}
          stroke={"black"}
          strokeDasharray={dashed ? "4" : "0"}
        />
      );
  
      return (
        <g>
          {line}
          {decorators.map(toDecoratorElems)}
        </g>
      );
    
  }

  export default Line;