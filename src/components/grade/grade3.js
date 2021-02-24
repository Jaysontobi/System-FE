import React from 'react';
import { Drawer, Card, Button, Typography, Icon, Row, Col, Spin } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import GradeForm from './gradeForm'
import TeacherForm from './teacherForm'

import GradeAction from './gradeAction'
import AdvisoryForm from './advisoryForm'
import AdvisorAction from './advisoryAction';
import StudentGradeTable from '../userDetails/gradeTable'
import GradeTable from './gradeTable'
import TeacherAction from './teacherAction';

const GradePage = () => {


  let {
    addGrade,
    showGradeVisible,
    setShowGradeVisible,
    showGrade,
    grade3Details,
    selectedGrade,
    editGrade,
    selectedTeacher,
    selectedGradeUser,
    upgradeStudent,
    setSelectedListOfStudent,
    loading
  } = GradeAction({});

  let {
    showTeacherVisible,
    hideTeacher,
    showTeacher,
    add,
    selectedTeacherAssignedGrade3,
    selectedTeacherAssgined
  } = TeacherAction({});

  let {
    showAdvisorVisible,
    hideAdvisor,
    showAdvisor,
    addAdvisor,
    selectedAdvisoryAssignedGrade3,
    selectedAdvisoryAssgined
  } = AdvisorAction({});


  return (
    <Card className="h-82 p-70">
    <Spin spinning={loading} delay={0}>
    <Row>
      <Col lg={{ span: 12 }}>
        <Typography.Title level={3}>Grade3 Management</Typography.Title>
      </Col>
      <Col lg={{ span: 12 }}>
      {JSON.parse(sessionStorage.user).role === "Admin" ?       <Button className="right" type="save " onClick={() => showTeacher("3")}>
          <MinusCircleOutlined type="minus-circle" /> Add teacher
             </Button>: null
             }
                                  {JSON.parse(sessionStorage.user).role === "Admin" ?       <Button className="right" type="save " onClick={() => showAdvisor("3")}>
          <MinusCircleOutlined type="minus-circle" /> Add Advisor
             </Button> : null}
      
             {JSON.parse(sessionStorage.user).role === "Admin" ?   
        <Button className="right" onClick={() => upgradeStudent()}>
          <MinusCircleOutlined type="minus-circle" /> Upgrade
             </Button>
        : null}
      </Col>
    </Row>
    <Row>
      <Col lg={{ span: "24" }}>
        <GradeTable setSelectedListOfStudent={setSelectedListOfStudent} details={grade3Details.list} />
      </Col>
    </Row>
    <Drawer
              title={
                  <Typography.Title level={4}>
                  Student Info
                  </Typography.Title>
              }
              width={700}
              visible={showGradeVisible}
              onClose={()=> { setShowGradeVisible(false)}}
              bodyStyle={{ paddingBottom: 80 }}
          >
             <GradeForm upgradeStudent={upgradeStudent} add={addGrade} update={editGrade} selectedTeacher={selectedTeacher}  gradeLevel={"3"} selectedTeacherAssignedGrade={selectedTeacherAssignedGrade3} selectedGrade={selectedGrade}/>
             <StudentGradeTable details={selectedGradeUser ? selectedGradeUser: []}/>
          </Drawer>

          <Drawer
              title={
                  <Typography.Title level={4}>
                  Teachers for grade 3
                  </Typography.Title>
              }
              width={700}
              visible={showTeacherVisible}
              onClose={()=> hideTeacher()}
              bodyStyle={{ paddingBottom: 80 }}
          >
             <TeacherForm selectedTeacherAssgined={selectedTeacherAssgined} add={add} selectedTeacher={selectedTeacher} gradeLevel={"3"}/>
          </Drawer>

          <Drawer
              title={
                  <Typography.Title level={4}>
                  Advisor for grade 3
                  </Typography.Title>
              }
              width={700}
              visible={showAdvisorVisible}
              onClose={()=> hideAdvisor()}
              bodyStyle={{ paddingBottom: 80 }}
          >
             <AdvisoryForm selectedTeacherAssgined={selectedAdvisoryAssignedGrade3} selectedTeacher={selectedTeacher} add={addAdvisor} gradeLevel={"3"}/>
          </Drawer>
          </Spin>
  </Card>
	
      
  );
}

export default GradePage;

