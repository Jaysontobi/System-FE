import React, { useState } from 'react';
import { Form, Input, DatePicker, Select } from 'formik-antd'
import { Formik } from 'formik';
import { Row, Col, Button, message, Spin } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
const { Option } = Select;


const UserEditForm = ({ add,update, selectedUser, selectedParent }) => {

   let [loading, setLoading] = useState(false);
   let [gradeLevelVisible, setGradeLevelVisible] = useState(false);

   return (
      <Formik
         initialValues={selectedUser}
         enableReinitialize={true}
         onSubmit={async (values) => {
            if(values._id) {
               console.log(values)
               update(values)
            } else {
               add(values)
      
               // window.location.reload(false);
            }
         }}
         render={({ values, touched, setFieldValue }) => (
            <Spin spinning={loading} delay={500}>
               <Form className="p-30">
               <Row gutter={16}>
                     <Col span={12}>
                        <Form.Item label="ID Number" name="idNumber">
                           <Input name="idNumber" />
                        </Form.Item>
                     </Col>
                     <Col span={12}>
                        <Form.Item label="School Year" name="schoolYear">
                           <Input name="schoolYear" />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row gutter={16}>
                     <Col span={12}>
                        <Form.Item label="First Name" name="firstName">
                           <Input name="firstName" />
                        </Form.Item>
                     </Col>
                     <Col span={12}>
                        <Form.Item label="Middle Name" name="middleName">
                           <Input name="middleName" />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row gutter={16}>
                     <Col span={12}>
                        <Form.Item label="Last Name" name="lastName">
                           <Input name="lastName" />
                        </Form.Item>
                     </Col>
                     <Col span={12}>
                        <Form.Item label="Gender" name="gender">
                          <Select name="gender">
                              <Option value="Male">Male</Option>
                              <Option value="Female">Female</Option>
                           </Select>
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row gutter={16}>
                     <Col span={12}>
                        <Form.Item  label="Grade Level" name="gradeLevel">
                        <Select disabled={values.role != "Student"} name="gradeLevel">
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
                        </Form.Item>
                     </Col>
                     <Col span={12}>
                        <Form.Item label="Section" name="section">
                           <Input disabled={values.role != "Student"} name="section" />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row gutter={16}>
                     <Col span={12}>
                        <Form.Item label="Birth Day" name="birthDate">
                           <DatePicker name="birthDate" />
                        </Form.Item>
                     </Col>
                     <Col span={12}>
                        <Form.Item label="Birth Place" name="birthPlace">
                           <Input name="birthPlace" />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row gutter={16}>
                     <Col span={12}>
                        <Form.Item label="Age" name="age">
                           <Input name="age" />
                        </Form.Item>
                     </Col>
                     <Col span={12}>
                     <Form.Item label="Parent" name="parentId">
                     <Select value={values.parent ? values.parent.firstName + " " + values.parent.lastName : ""} name="parentId" disabled={values.role != "Student"}>
                        {selectedParent.map(parent => {
                                 return <Option value={parent._id}>{parent.firstName + " " + parent.lastName}</Option>
                        })}
                     </Select>
                     </Form.Item>
                     </Col>
                  </Row>
                  <Row gutter={16}>
                     <Col span={12}>
                        <Form.Item label="Contact Number" name="contactNumber">
                           <Input name="contactNumber" />
                        </Form.Item>
                     </Col>
                     <Col span={12}>
                        <Form.Item label="Email" name="email">
                           <Input name="email" />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row gutter={16}>
                     <Col span={12}>
                        <Form.Item label="Role" name="role">
                           <Select name="role">
                              <Option value="Admin">Admin</Option>
                              <Option value="Student">Student</Option>
                              <Option value="Parent">Parent</Option>
                              <Option value="Teacher">Teacher</Option>
                           </Select>
                        </Form.Item>
                     </Col>
                     <Col span={12}>
                        <Form.Item label="Password" name="password">
                           <Input.Password  name="password" />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Button className="btn-black" htmlType="submit">
                     <CheckCircleFilled type="check-circle" /> {values._id ? "Update": "Save"}
                  </Button>
               </Form>
            </Spin>
         )}
      />

   );
}

export default UserEditForm;