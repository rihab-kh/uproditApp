import React, {useEffect, useState} from "react";
import "antd/dist/antd.min.css";
import "./Menu.css";
import {Menu, Layout, PageHeader, Avatar, Dropdown, Typography} from "antd";
import Uprodit from "../../image/uprodit.png";


const {Header, Content, Footer, Sider} = Layout;

export default function MenuNav(props) {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}>
      <Sider>
        <img src={Uprodit} alt="uprodit" className="logo" />
        <Menu defaultSelectedKeys={[props.id]} mode="inline" theme="dark">
        
          <Menu.Item
            key="0"
            name="Administration"
            
            >
           Administration
          </Menu.Item>
          <Menu.Item
            name="Sending Emails"
            key="1"
            >
            Sending Emails
          </Menu.Item>
          <Menu.Item
            name="News"
            key="2"
           
            >
           News
          </Menu.Item>
          <Menu.Item
            name="Statistics"
            key="3"
            
            >
          Statistics
          </Menu.Item>
          <Menu.Item
            name="Chat"
            key="4"
         
            >
            Chat
          </Menu.Item>
          <Menu.Item
            name="Jobs"
            key="5"
           
            >
        Jobs
          </Menu.Item>
          <Menu.Item
            name="Community"
            key="6"
            
            >
            Community
          </Menu.Item>
        
        </Menu>
      </Sider>

      <Layout className="site-layout">
      <Header
          className="site-layout-background backgroundcolornav"
          style={{
            padding: 0,
          }}>

<Menu theme="white" mode="horizontal" defaultSelectedKeys={['1']} >
        <Menu.Item key={'1'}> Profil </Menu.Item>
        </Menu>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}>
          <PageHeader className="site-page-header" title={props.title} />
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}>
            {props.children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}>
        </Footer>
      </Layout>
    </Layout>
    
  );
  
}
