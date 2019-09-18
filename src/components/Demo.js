import React, { Fragment } from 'react';
import Operation from './Operation';
import Line from './Line';



const Demo = () => {
    let { decorators, x1, y1, x2, y2 } = {
      x1: 375,
      y1: 150,
      x2: 375,
      y2: 900,
      decorators: [
        { type: "attenuator", starts: 0.5, ends: 0.55 },
        { type: "amplifier", starts: 0.28, ends: 0.32 },
        { type: "open", at: 1 },
        { type: "closed", at: 0 },
        { type: "open", at: 0.6 }
      ]
    };
    return (
      <Fragment>
      <g>
        <Operation width={100} height={100} x={300} y={100} />
        <Operation width={100} height={100} x={300} y={250} />
        <Operation width={100} height={100} x={300} y={400} />
        <Operation width={100} height={100} x={300} y={600} />
        <Operation width={100} height={100} x={300} y={900} />
        <Line x1={x1} y1={y1} x2={x2} y2={y2} decorators={decorators} />
      </g>
      </Fragment>
    );
}

export default Demo;
