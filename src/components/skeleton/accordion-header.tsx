import { Skeleton } from 'antd';
import React from 'react';

const AccordionHeaderSkeleton = () => {
  return (
    <div>
      <Skeleton.Button
        active
        style={{ width: '80%', height: '20px', marginBottom: '8px' }}
      />
      <Skeleton.Button
        active
        style={{ width: '60%', height: '16px', marginBottom: '8px' }}
      />
    </div>
  );
};

export default AccordionHeaderSkeleton;
