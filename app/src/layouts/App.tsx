import { Outlet } from "react-router-dom";
import { ProtectedRoute } from "../utils/hooks/protectedRoute";
import { ToastContainer } from "react-toastify";

import {
  AppstoreOutlined,
  BarChartOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { createElement, useState } from "react";
import { PageHeader } from "../components";
import { ZonseSquareLogo } from "../assets/images";

const { Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  AppstoreOutlined,
  BarChartOutlined,
  TeamOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: createElement(icon),
  label: `nav ${index + 1}`,
}));

const App = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <ProtectedRoute>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Layout className="w-screen h-screen bg-gray-300">
        <Sider trigger={null} collapsible collapsed={collapsed} className="bg-white dark:bg-gray-800">
          <div className="h-8 mx-4 mt-4 mb-1 bg-opacity-30" >
            <img src={ZonseSquareLogo} alt="..." />
          </div>
          <Menu mode="inline" defaultSelectedKeys={['1']} items={items} />
        </Sider>

        <Layout>

          <PageHeader setCollapsed={setCollapsed} collapsed={collapsed} />

          <Content className="bg-white dark:bg-gray-900">

            <Outlet />

          </Content>

          <Footer style={{ textAlign: 'center' }}>{"Zonse Group of Companies ©2023"}</Footer>

        </Layout>
      </Layout>

    </ProtectedRoute>
  );
}

export default App;
