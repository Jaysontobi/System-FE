import React from 'react';
import { Table } from 'antd';

const GradeTable = ({ details, setSelectedListOfStudent }) => {

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
        title: 'Contact Number',
        dataIndex: 'contactNumber',
      },  
      {
        title: 'Email',
        dataIndex: 'email',
      },   
      {
        title: 'Section',
        dataIndex: 'section',
      },   
      {
        title: 'Action',
        dataIndex: 'action',
      },                            
   ];

   const rowUserSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
         setSelectedListOfStudent(selectedRows)
      }
  };


   return (
      <Table rowSelection={rowUserSelection} columns={columns} dataSource={details}
      />
   );
}

export default GradeTable;