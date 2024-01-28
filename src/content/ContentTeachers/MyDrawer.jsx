import { Drawer, Input, Button, Alert } from "antd";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { useData } from "../../hooks/useData";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTeacher } from "../../redux/teachersSlice";

const generateTeacherID = () => {
   const minID = 10000; // Smallest 5-digit number
   const maxID = 99999; // Largest 5-digit number

   const teacherID =
      Math.floor(Math.random() * (maxID - minID + 1)) + minID;

   return teacherID;
};

export default function MyDrawer({ open, setOpen, data, setData }) {
   const [form] = useForm();
   const { loading, addData } = useData();
   const dispatch = useDispatch();
   const onFinish = async (values) => {
      const id = generateTeacherID();
      const newTeacher = { ...values, id };
      await addData("teachers", newTeacher)
         .then((res) => {
            <Alert
               key={"key"}
               message="Added the teacher"
               type="success"
            />;
         })
         .catch((err) => {
            <Alert
               key={"id"}
               message="Failed to update"
               type="error"
            />;
            console.log(err);
         });
      dispatch(addTeacher(newTeacher));
      form.resetFields();
      setOpen(false);
   };
   const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
   };
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
               autoFocus
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
               <Button
                  loading={loading}
                  htmlType="submit"
                  type="primary"
               >
                  Add the Teacher
               </Button>
            </Form.Item>
         </Form>
      </Drawer>
   );
}
