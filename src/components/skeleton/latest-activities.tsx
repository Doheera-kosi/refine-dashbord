import { Card, List } from "antd";

const LatestActivitiesSkeleton = () => {
  const data = new Array(5).fill(null).map((_, index) => ({
    id: index,
  }));

  return (
    <Card
      headStyle={{ padding: '16px' }}
      bodyStyle={{ padding: '0 1rem' }}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={() => (
          <List.Item>
            <div style={{ width: 50, height: 50, backgroundColor: '#f0f0f0', marginRight: 16 }} />
            <List.Item.Meta
              title={<div style={{ width: '50%', height: 24, backgroundColor: '#f0f0f0' }} />}
              description={<div style={{ width: '100%', height: 24, backgroundColor: '#f0f0f0' }} />}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default LatestActivitiesSkeleton;
