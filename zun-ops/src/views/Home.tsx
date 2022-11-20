import {
  DesktopOutlined,
  FileOutlined, MenuFoldOutlined, MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate,Outlet } from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('页面1', '/page1', <PieChartOutlined />),
  getItem('页面2', '/page2', <DesktopOutlined />),
  getItem('小孩', 'sub1', <UserOutlined />, [
    getItem('Tom', '3222'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigateTo = useNavigate()
  const menuClick = (e:{key:string}) =>{
    console.log("点击了菜单", e.key);

    //点击跳转对应路由 编程式导航跳转，利用一个hook
    navigateTo(e.key);
  }

  const handleOpenChange = (keys:string[])=>{
    // 点击 展开回收菜单，控制列表实现
    console.log(keys)

  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/*左边侧边栏*/}
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        <Menu
            theme="dark"
            defaultSelectedKeys={['page1']}
            mode="inline"
            items={items}
            onClick={menuClick}
            // 展开回收事件
            onOpenChange={handleOpenChange}
        />
      </Sider>
      {/*右边内容*/}
      <Layout className="site-layout">
        {/*右边头部*/}
        <Header className="site-layout-background" style={{ padding: 0 }} >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>


        {/*右边内容*/}
        <Content style={{ margin: '0 16px' }}>
          {/*面包屑*/}
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {/*窗口部分.*/}
            <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>赵胜冲 Egine</Footer>
      </Layout>
    </Layout>
  );
};

export default View;