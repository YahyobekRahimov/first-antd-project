import Input from "antd/es/input/Input";
import { Button } from "antd";

import TeachersTable from "/src/content/ContentTeachers/TeachersTable";
import MyDrawer from "./MyDrawer";
import { useState } from "react";

export default function ContentTeachers() {
   const [data, setData] = useState([]);
   const [open, setOpen] = useState(false);
   return (
      <div className="flex flex-col gap-10">
         <div className="flex gap-10 items-end">
            <label
               htmlFor="group-name"
               className="flex flex-col gap-2"
            >
               <span>Teachers</span>
               <Input
                  className="w-44"
                  placeholder="Teacher name"
                  variant="outlined"
                  id="group-name"
               />
            </label>

            <Button type="default">Clear</Button>
            <Button
               onClick={() => setOpen(true)}
               type="primary"
               className="ml-auto mr-[3rem]"
            >
               Add a new teacher
            </Button>
            <MyDrawer
               data={data}
               setData={setData}
               open={open}
               setOpen={setOpen}
            />
         </div>
         <TeachersTable
            data={data}
            setData={setData}
            setOpen={setOpen}
         />
      </div>
   );
}
