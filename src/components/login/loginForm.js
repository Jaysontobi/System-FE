import React from 'react';
import { Form, Input, DatePicker, Select } from 'formik-antd'
import { Formik } from 'formik';
import { Row, Col, Button, Spin } from 'antd';

const LoginForm = ({login}) => {
   return (
      <Formik
         initialValues={{
            username: "",
            password: ""
         }}
         enableReinitialize={true}
         onSubmit={async (values, actions) => {
             login(values)
            // await login(values)
            // actions.setSubmitting(false);
         }}
         render={
            ({ values, errors, touched, setFieldValue, isSubmitting }) => (
               <Spin spinning={isSubmitting}>
                  <Form>
                     <Row>
                        <Col>
                           <Form.Item label="Username" name="username">
                              <Input name="username" />
                           </Form.Item>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <Form.Item label="Password" name="password">
                              <Input.Password name="password" />
                           </Form.Item>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <Button type="dark" className="btn-login" htmlType="Submit">
                              Login
                        </Button>
                        </Col>
                     </Row>
                  </Form>
               </Spin>
            )}
      />
   );
}

export default LoginForm;