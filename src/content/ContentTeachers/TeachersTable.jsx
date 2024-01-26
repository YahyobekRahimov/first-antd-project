import { Table } from "antd";
import { Button } from "antd";

export default function MyTable() {
   const generateTeacherID = () => {
      const minID = 10000; // Smallest 5-digit number
      const maxID = 99999; // Largest 5-digit number

      const teacherID =
         Math.floor(Math.random() * (maxID - minID + 1)) + minID;

      return teacherID;
   };
   const generateRandomNumber = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
   const dataSource = [
      {
         key: "1",
         ID: generateTeacherID(),
         firstName: "John",
         lastName: "Harrington",
         workingHours: generateRandomNumber(30, 40),
         info: <Button type="primary">...</Button>,
      },
      {
         key: "2",
         ID: generateTeacherID(),
         firstName: "David",
         lastName: "Hopper",
         workingHours: generateRandomNumber(25, 30),
         info: <Button type="primary">...</Button>,
      },
   ];

   const columns = [
      {
         title: "ID",
         dataIndex: "ID",
         key: "ID",
      },
      {
         title: "First name",
         dataIndex: "firstName",
         key: "firstName",
      },
      {
         title: "Last name",
         dataIndex: "lastName",
         key: "lastName",
      },
      {
         title: "Working hours / week",
         dataIndex: "workingHours",
         key: "workingHours",
      },
      {
         title: "Info",
         dataIndex: "info",
         key: "info",
      },
   ];
   return <Table dataSource={dataSource} columns={columns} />;
}
