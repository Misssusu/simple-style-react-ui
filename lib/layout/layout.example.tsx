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
                    <Header className="row header"></Header>
                    <Content className="content"></Content>
                    <Footer className="row footer"></Footer>
                </Layout>
            </div>
            <div>
                <h1>第二个例子</h1>
                <Layout style={{height: 500, width: 500}}>
                    <Header className="row header"></Header>
                    <Layout>
                        <Aside className="aside"></Aside>
                        <Content className="content"></Content>
                    </Layout>
                    <Footer className="row footer"></Footer>
                </Layout>
            </div>
            <div>
                <h1>第三个例子</h1>
                <Layout style={{height: 500, width: 500}}>
                    <Header className="row header"></Header>
                    <Layout>
                        <Content className="content"></Content>
                        <Aside className="aside"></Aside>
                    </Layout>
                    <Footer className="row footer"></Footer>
                </Layout>
            </div>
            <div>
                <h1>第四个例子</h1>
                <Layout style={{height: 500, width: 500}}>
                    <Aside className="aside"></Aside>
                    <Layout>
                        <Header className="header row"></Header>
                        <Content className="content"></Content>
                        <Footer className="footer row"></Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
}