import React from 'react';
type ScrollProps = {
  children?: React.ReactNode;
};

const Scroll = (props: ScrollProps) => {
  const { children } = props;
  return (
    <div
      style={{ overflow: 'scroll', border: '5px solid black', height: '800px' }}
    >
      {children}
    </div>
  );
};

export default Scroll;
