import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
   <ConfigProvider
      theme={{
         token: {
            colorPrimary: "#BC8E5C",
         },
      }}
   >
      <App />
   </ConfigProvider>
);
