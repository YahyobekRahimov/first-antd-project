import { Table } from "antd";
import { Button } from "antd";

export default function MyTable() {
   const dataSource = [
      {
         key: "1",
         number: "1",
         groupName: "Frontend ReactJS (Standard) FN9",
         status: "active",
         lessonStartDate: "14 Avg 2023",
         lessonEndDate: "01 Apr 2024",
         info: <Button type="primary">...</Button>,
      },
      {
         key: "2",
         number: "2",
         groupName: "Frontend ReactJS (Standard) FN10",
         status: "active",
         lessonStartDate: "09 Avg 2023",
         lessonEndDate: "27 Mart 2024",
         info: <Button type="primary">...</Button>,
      },
   ];

   const columns = [
      {
         title: "Buyurtma",
         dataIndex: "number",
         key: "number",
      },
      {
         title: "Guruh nomi",
         dataIndex: "groupName",
         key: "group-name",
      },
      {
         title: "Holati",
         dataIndex: "status",
         key: "status",
      },
      {
         title: "Lesson start date",
         dataIndex: "lessonStartDate",
         key: "lesson-start-date",
      },
      {
         title: "Lesson end date",
         dataIndex: "lessonEndDate",
         key: "lesson-start-date",
      },
      {
         title: "Info",
         dataIndex: "info",
         key: "info",
      },
   ];
   return <Table dataSource={dataSource} columns={columns} />;
}
