import {MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';
import { Breadcrumb, Layout} from 'antd';
import React, { useState } from 'react';
import { Outlet } from "react-router-dom"
import MainMenu from "@/components/MainMenu";

const { Header, Content, Footer, Sider } = Layout;


const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
      <Layout style={{ minHeight: '100vh' }}>
          {/*左边部分*/}
          <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
              <div className="logo" />
              {/*主菜单*/}
              <MainMenu></MainMenu>
          </Sider>

          {/*右边部分*/}
          <Layout className="site-layout">

              {/*右边页眉*/}
              <Header className="site-layout-background" style={{padding: 0}}>
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

              {/*页脚*/}
              <Footer style={{ textAlign: 'center' }}>赵胜冲 Egine</Footer>

          </Layout>
    </Layout>
  );
};

export default View;