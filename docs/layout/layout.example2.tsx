import React from "react";
import Layout from "../../lib/layout/layout";
import Header from "../../lib/layout/header";
import Aside from "../../lib/layout/aside";
import Content from "../../lib/layout/content";
import Footer from "../../lib/layout/footer";

import "./layout.example.scss";

export default function () {
    return(
        <div>
            <div>
                <Layout style={{height: 500, width: 500}}>
                    <Header className="row layout-header">header</Header>
                    <Layout>
                        <Aside className="layout-aside">aside</Aside>
                        <Content className="layout-content">content</Content>
                    </Layout>
                    <Footer className="row layout-footer">footer</Footer>
                </Layout>
            </div>
        </div>
    )
}