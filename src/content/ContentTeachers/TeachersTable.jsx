import { Button, Table } from "antd";
import { useData } from "../../hooks/useData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher } from "../../redux/teachersSlice";
import DeleteIcon from "/src/assets/trash.svg?react";

export default function MyTable({ data, setData, setOpen }) {
   const { loading, getData, deleteData } = useData();
   function handleDeleteClick(id) {
      deleteData("teachers", id);
   }

   useEffect(() => {
      (async function () {
         const res = await getData("teachers");
         setData(res);
      })();
   }, []);
   const columns = [
      {
         title: "ID",
         dataIndex: "id",
         key: "id",
         width: "100px",
         align: "center",
      },
      {
         title: "First name",
         dataIndex: "firstName",
         key: "firstName",
         align: "center",
      },
      {
         title: "Last name",
         dataIndex: "lastName",
         align: "center",
         key: "lastName",
      },
      {
         title: "Working hours / week",
         dataIndex: "workingHours",
         key: "workingHours",
         align: "center",
         width: "200px",
      },
      {
         title: "Actions",
         align: "center",
         key: "actions",
         align: "center",
         render: (record) => (
            <Button
               danger
               className="bg-red-500 flex items-center justify-center"
               style={{
                  width: "max-content",
                  padding: "5px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
               }}
               icon={<DeleteIcon className="w-7 fill-white" />}
               onClick={handleDeleteClick(record.id)}
            ></Button>
         ),
      },
   ];

   return (
      <Table
         loading={loading && !data.length}
         dataSource={data ? data : ""}
         columns={columns}
         bordered={true}
         size="small"
         pagination={{ pageSize: 7 }}
      />
   );
}
