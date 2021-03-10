import React from "react";
import Layout from "../../lib/layout/layout";
import Header from "../../lib/layout/header";
import Content from "../../lib/layout/content";
import Footer from "../../lib/layout/footer";

import "./layout.example.scss";

export default function () {
    return(
        <div>
            <div>
                <Layout style={{height: 500, width: 500}}>
                    <Header className="row layout-header">header</Header>
                    <Content className="layout-content">content</Content>
                    <Footer className="row layout-footer">footer</Footer>
                </Layout>
            </div>
        </div>
    )
}