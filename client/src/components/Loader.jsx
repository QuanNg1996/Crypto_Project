import React from 'react';
import { Spin } from 'antd';

const Loader = () => {
  return (
    <div className="loader" data-testid="loader">
      <Spin />
    </div>
  );
};

export default Loader;
