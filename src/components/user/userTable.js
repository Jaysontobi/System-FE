import React from 'react';
import { Table } from 'antd';

const EmployeeTable = ({ details }) => {

   const columns = [
      {
         title: 'Id Number',
         dataIndex: 'idNumber',
      },
      {
         title: 'First Name',
         dataIndex: 'firstName',
      },
      {
         title: 'Middle Name',
         dataIndex: 'middleName',
      },
      {
         title: 'Last Name',
         dataIndex: 'lastName',
      },
      {
         title: 'Gender',
         dataIndex: 'gender',
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },   
      {
        title: 'Contact Number',
        dataIndex: 'contactNumber',
      },  
      {
        title: 'Email',
        dataIndex: 'email',
      },   
      {
        title: 'Role',
        dataIndex: 'role',
      },   
      {
        title: 'Action',
        dataIndex: 'action',
      },                            
   ];

   const rowUserSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
         console.log(selectedRows)
      }
  };


   return (
      <Table rowSelection={rowUserSelection} columns={columns} dataSource={details}
      />
   );
}

export default EmployeeTable;