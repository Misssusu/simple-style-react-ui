import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";

import "./layout.example.scss";

export default function () {
    return(
        <div>
            <div>
                <h1>第一个例子</h1>
                <Layout style={{height: 500, width: 500}}>
                    <Header className="row layout-header">header</Header>
                    <Content className="layout-content">content</Content>
                    <Footer className="row layout-footer">footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第二个例子</h1>
                <Layout style={{height: 500, width: 500}}>
                    <Header className="row layout-header">header</Header>
                    <Layout>
                        <Aside className="layout-aside">aside</Aside>
                        <Content className="layout-content">content</Content>
                    </Layout>
                    <Footer className="row layout-footer">footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第三个例子</h1>
                <Layout style={{height: 500, width: 500}}>
                    <Header className="row layout-header">header</Header>
                    <Layout>
                        <Content className="layout-content">content</Content>
                        <Aside className="layout-aside">aside</Aside>
                    </Layout>
                    <Footer className="row layout-footer">footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第四个例子</h1>
                <Layout style={{height: 500, width: 500}}>
                    <Aside className="layout-aside"/>
                    <Layout>
                        <Header className="layout-header row">header</Header>
                        <Content className="layout-content">content</Content>
                        <Footer className="layout-footer row">footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
}