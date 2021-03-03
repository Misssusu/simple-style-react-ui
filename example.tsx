import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, NavLink } from "react-router-dom";
import IconExample from "./lib/icon/icon.example";
import InputExample from "./lib/input/input.example";
import LayoutExample from "./lib/layout/layout.example";
import Icon from "./lib/icon/icon";
import "./example.scss";
import { Layout, Aside, Content, Footer, Header } from "./lib/layout/layout";
import ButtonDemo from "./lib/button/button.demo";
ReactDOM.render(
    <Router>
        <Layout className="site-page">
            <Header className="site-header">
                <div className="site-logo">simple-style-ui</div>
            </Header>
            <Layout className="site-layout">
                <Aside className="site-aside">
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to="/icon">Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/button">Button</NavLink>
                        </li>
                        <li>
                            <NavLink to="/input">Input</NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">Layout</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Content className="site-main">
                    <Route path="/icon" component={IconExample}/>
                    <Route path="/button" component={ButtonDemo}/>
                    <Route path="/input" component={InputExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                </Content>
            </Layout>
            <Footer className="site-footer">
                <ul>
                    <li>
                        <Icon name="github"/>
                        <span> Github</span>
                    </li>
                    <li> &copy; suyuan</li>
                </ul>
            </Footer>
        </Layout>
    </Router>,
    document.getElementById('root')
)