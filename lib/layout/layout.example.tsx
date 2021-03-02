import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default function () {
    return(
        <div>
            <h1>第一个例子</h1>
            <Layout className="hhh">
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </Layout>
        </div>
    )
}