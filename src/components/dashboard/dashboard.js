import React from 'react';
import { Drawer, Card, Button, Typography, Icon, Row, Col } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import DashboardAtion from "../dashboard/dashboardAction"

const EmployeePage = () => { 
    let{
        userDetails
      } = DashboardAtion({});
  return (
    <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Total Number Of Students" bordered={false}>
          {userDetails.numberOfStudents}
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Total Number Of Parents" bordered={false}>
        {userDetails.numberOfParents}
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Total Number Of Teachers" bordered={false}>
        {userDetails.numberOfTeachers}
        </Card>
      </Col>
    </Row>
  </div>
      
  );
}

export default EmployeePage;

