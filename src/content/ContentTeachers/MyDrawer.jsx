import { Drawer, Input, Button } from "antd";
import { Form } from "antd";

const onFinish = (values) => {
   console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
   console.log("Failed:", errorInfo);
};
export default function MyDrawer({ open, setOpen }) {
   return (
      <Drawer
         title="Basic Drawer"
         onClose={() => setOpen(false)}
         open={open}
      >
         <h2>
            Enter the following information about the teacher to add
         </h2>
         <Form
            name="basic"
            labelCol={{
               span: 8,
            }}
            wrapperCol={{
               span: 16,
            }}
            style={{
               maxWidth: 600,
            }}
            initialValues={{
               remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
         >
            <Form.Item
               label="First name"
               name="firstName"
               labelCol={{ span: 24 }}
               rules={[
                  {
                     required: true,
                     message: "Please, enter the first name",
                  },
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="Last name"
               labelCol={{ span: 24 }}
               name="lastName"
               rules={[
                  {
                     required: true,
                     message: "Please, enter the last name",
                  },
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="Working Hours / week"
               labelCol={{ span: 24 }}
               name="workingHours"
               rules={[
                  {
                     required: true,
                     message:
                        "You must enter the working hours / week",
                  },
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item>
               <Button htmlType="submit" type="primary">
                  Add the Teacher
               </Button>
            </Form.Item>
         </Form>
      </Drawer>
   );
}
