import { Table } from "antd";
import { Button } from "antd";
import { useData } from "../../hooks/useData";

export default function MyTable() {
   const { data, loading } = useData();
   const generateTeacherID = () => {
      const minID = 10000; // Smallest 5-digit number
      const maxID = 99999; // Largest 5-digit number

      const teacherID =
         Math.floor(Math.random() * (maxID - minID + 1)) + minID;

      return teacherID;
   };
   const generateRandomNumber = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

   const columns = [
      {
         title: "ID",
         dataIndex: "id",
         key: "id",
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
   ];

   return (
      <Table
         loading={loading}
         dataSource={data ? data : ""}
         columns={columns}
      />
   );
}
