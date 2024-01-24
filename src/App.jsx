import React, { useState } from "react";
import {
   MenuFoldOutlined,
   MenuUnfoldOutlined,
   UploadOutlined,
   UserOutlined,
   VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import Logo from "/src/assets/logo.svg?react";
import Profile from "/src/assets/profile.svg?react";
import Groups from "/src/assets/group.svg?react";
import WebContent from "./components/WebContent";
import Info from "/src/assets/info-outline.svg?react";
import Logout from "/src/assets/alternate-sign-out.svg?react";

const { Header, Sider, Content } = Layout;

const App = () => {
   const [collapsed, setCollapsed] = useState(false);
   const {
      token: { colorBgContainer, borderRadiusLG },
   } = theme.useToken();
   return (
      <Layout className="min-h-[100vh]">
         <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <div className="text-white py-[0.57rem] border-b border-t-0 border-l-0 border-r-0 border-b-[rgba(255, 255, 255, 0.3)] border-solid flex justify-center items-center gap-4">
               <Logo className="fill-[#BC8E5C]" />
               {collapsed ? (
                  ""
               ) : (
                  <span className="text-[1.5rem]">Teacher</span>
               )}
            </div>
            <Menu
               className="pt-3"
               theme="dark"
               mode="inline"
               defaultSelectedKeys={["1"]}
               items={[
                  {
                     key: "1",
                     icon: (
                        <Groups className="h-[1.5rem] fill-white" />
                     ),
                     label: "Guruhlarim",
                  },
                  {
                     key: "2",
                     icon: (
                        <Profile className="h-[1.5rem] fill-white" />
                     ),
                     label: "Profile",
                  },
               ]}
            />
         </Sider>
         <Layout>
            <Header
               style={{
                  padding: 0,
                  background: "#00152A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
               }}
            >
               <Button
                  type="text"
                  icon={
                     collapsed ? (
                        <MenuUnfoldOutlined className="text-white" />
                     ) : (
                        <MenuFoldOutlined className="text-white" />
                     )
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                     fontSize: "16px",
                     width: 64,
                     height: 64,
                  }}
               />
               <div className="flex items-center gap-10 pr-10">
                  <Button className="flex items-center justify-center gap-1">
                     <Info className="w-[1.2rem]" />
                     <span>Synchronization</span>
                  </Button>
                  <Button
                     type="primary"
                     className="flex items-center justify-center gap-2"
                  >
                     <span>Chiqish</span>
                     <Logout className="w-[1.2rem] fill-white" />
                  </Button>
               </div>
            </Header>
            <Content
               style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                  height: `80vh`,
               }}
            >
               <WebContent />
            </Content>
         </Layout>
      </Layout>
   );
};
export default App;
