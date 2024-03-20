import { Card, Skeleton } from 'antd'
import React from 'react'

const ProjectCardSkeleton = () => {
  return (
    <Card style={{ width: 300 }}>
      <Skeleton loading active>
        <Card.Meta
          title={<Skeleton.Button style={{ width: "80%" }} active />}
          description={<Skeleton.Button style={{ width: "60%", marginTop: 10 }} active />}
        />
      </Skeleton>
    </Card>
  )
}

export default ProjectCardSkeleton
