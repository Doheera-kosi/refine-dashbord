import React, { ReactNode } from 'react';
import { Skeleton } from 'antd';

interface KanbanColumnSkeletonProps {
  children?: ReactNode; // Make children optional
}

const KanbanColumnSkeleton: React.FC<KanbanColumnSkeletonProps> = ({ children }) => {
  return (
    <div>
      <Skeleton loading={true} active paragraph={{ rows: 8 }} />
      {children}
    </div>
  );
};

export default KanbanColumnSkeleton;
