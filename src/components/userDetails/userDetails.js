import React from 'react';
import { Drawer, Card, Button, Typography, Icon, Row, Col, Select, Spin } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';


import UserForm from './userDetailsForm'
import UserTable from './gradeTable'
import GradeAction from '../grade/gradeAction'
import AdvisorAction from '../grade/advisoryAction'
const { Option } = Select;


const EmployeePage = () => {

  let {
    selectedUserGrade,
    showAllGradeVisible, 
    setShowAllGradeVisible,
    selectedUser,
    studentAdvisor,
    filterCurrentGradeUser,
    loading
  } = GradeAction({});


  return (
    <Card className="h-82 p-70">
    <Spin spinning={loading} delay={0}>
    <Row>
      <Col lg={{ span: "24" }}>
        <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
  <Card size="small" title="Student Details">
  <p>Full Name: {selectedUser.firstName ? selectedUser.firstName + " " + selectedUser.lastName: null}</p>
      <p>Grade Level: {JSON.parse(sessionStorage.user).gradeLevel}</p>
      <p>Section: {selectedUser ? selectedUser.section: null}</p>
      <p>Advisor Name: {studentAdvisor && studentAdvisor.teacher ? studentAdvisor.teacher.firstName + " " + studentAdvisor.teacher.lastName: null}</p>
      <p>Advisor Contact Number: {studentAdvisor && studentAdvisor.teacher ? studentAdvisor.teacher.contactNumber: null}</p>
    </Card>
      </Col>
      {/* <Col span={8}>
      <Card size="small" title="List Of Grade" extra={<button onClick={()=> setShowAllGradeVisible(true)}>More</button>} style={{ width: 300 }}>
      <p>Final Grade English: {selectedUserGrade && selectedUserGrade[0] ? selectedUserGrade[0].FinalGrade : 0}</p>
      <p>Final Grade Filipino: {selectedUserGrade && selectedUserGrade[1] ? selectedUserGrade[1].FinalGrade : 0}</p>
      <p>Final Grade Science: {selectedUserGrade && selectedUserGrade[2] ? selectedUserGrade[2].FinalGrade : 0}</p>
      <p>Final Grade Math: {selectedUserGrade && selectedUserGrade[3] ? selectedUserGrade[3].FinalGrade : 0}</p>
      <p>Final Grade MAPEH: {selectedUserGrade && selectedUserGrade[4] ? selectedUserGrade[4].FinalGrade : 0}</p>
      <p>Final Grade Values: {selectedUserGrade && selectedUserGrade[5] ? selectedUserGrade[5].FinalGrade : 0}</p>
    </Card>
      </Col>*/}
    </Row> 
  </div>
  {/* <Drawer
              title={
                  <Typography.Title level={4}>
                  Grades
                  </Typography.Title>
              }
              width={1000}
              visible={showAllGradeVisible}
              onClose={()=> setShowAllGradeVisible(false)}
              bodyStyle={{ paddingBottom: 80 }}
          > */}
                        <Select onChange={(value)=> filterCurrentGradeUser(value) }>
                              <Option value="1">1</Option>
                              <Option value="2">2</Option>
                              <Option value="3">3</Option>
                              <Option value="4">4</Option>
                              <Option value="5">5</Option>
                              <Option value="6">6</Option>
                              <Option value="7">7</Option>
                              <Option value="8">8</Option>
                              <Option value="9">9</Option>
                              <Option value="10">10</Option>
                           </Select>
                     <UserTable details={selectedUserGrade ? selectedUserGrade: []}/>
          {/* </Drawer> */}

      </Col>
    </Row>
    </Spin>
  </Card>
	
      
  );
}

export default EmployeePage;

