import React from 'react';

interface SpaceProps {
  w?: number | string;
  h?: number | string;
}

const Space = (props: SpaceProps) => {
  const { w, h } = props;
  return <div style={{ height: h, width: w }}></div>;
};

export default Space;
