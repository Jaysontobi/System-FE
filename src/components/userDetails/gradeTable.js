import React from 'react';
import { Table } from 'antd';

const TimeKeepingTable = ({ details }) => {

   const columns = [
      {
         title: 'Subject',
         dataIndex: 'subject',
      },
      {
        title: '1st Quarter',
        dataIndex: 'Quarter1st',
     },
      {
         title: '2nd Quarter',
         dataIndex: 'Quarter2nd',
      },
      {
         title: '3rd Quarter',
         dataIndex: 'Quarter3rd',
      },
      {
        title: '4th Quarter',
        dataIndex: 'Quarter4th',
     },
     {
        title: 'Final Grade',
        dataIndex: 'FinalGrade',
     },
     {
        title: 'Remarks',
        dataIndex: 'Remarks',
     }
                            
   ];

   return (
      <Table columns={columns} dataSource={details}
      />
   );
}

export default TimeKeepingTable;