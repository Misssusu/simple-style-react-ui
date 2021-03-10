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