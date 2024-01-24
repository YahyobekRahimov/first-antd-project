import Input from "antd/es/input/Input";
import { Button, Select } from "antd";
import MyTable from "/src/components/MyTable";

export default function WebContent() {
   return (
      <div className="flex flex-col gap-10">
         <div className="flex gap-10 items-end">
            <label
               htmlFor="group-name"
               className="flex flex-col gap-2"
            >
               <span>Guruh nomi</span>
               <Input
                  className="w-44"
                  placeholder="Guruh nomi"
                  variant="outlined"
                  id="group-name"
               />
            </label>
            <label htmlFor="status" className="flex flex-col gap-2">
               <span>Holati</span>
               <Select
                  defaultValue="all"
                  className="w-44"
                  options={[
                     {
                        value: "all",
                        label: <span>Hammasi</span>,
                     },
                     {
                        value: "active",
                        label: <span>Active</span>,
                     },
                     {
                        value: "inactive",
                        label: <span>Inactive</span>,
                     },
                  ]}
                  id="status"
               />
            </label>
            <Button type="default">Clear</Button>
         </div>
         <MyTable />
      </div>
   );
}
