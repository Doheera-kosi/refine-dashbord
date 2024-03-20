import { Avatar, List, Skeleton } from 'antd'
import React from 'react'

const LatestActivitiesSkeleton = () => {
  const data = new Array(5).fill(null).map((_, index) => ({
    id: index,
    title: <Skeleton.Button active style={{ width: "80%" }} />,
    description: <Skeleton.Button active style={{ width: "60%", marginTop: 10 }} />,
  }))

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar icon={<Skeleton.Avatar active />} />}
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  )
}

export default LatestActivitiesSkeleton
