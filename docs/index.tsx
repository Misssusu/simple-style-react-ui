import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import Icon from "../lib/icon/icon";
import "./index.scss";
import { Content, Footer, Header } from "../lib/layout/layout";
import ButtonDemo from "./button/button.demo";
import InputDemo from "./input/input.demo";
import LayoutDemo from "./layout/layout.demo";

ReactDOM.render(
    <Router>
        <div className="site-page">
            <Header className="site-header">
                <div className="site-logo">simple-style-ui</div>
            </Header>
            <div className="site-layout">
                <aside className="site-aside">
                    <h2>组件</h2>
                    <ul>
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
                </aside>
                <Content className="site-main">
                    <Route path="/button" component={ButtonDemo}/>
                    <Route path="/input" component={InputDemo}/>
                    <Route path="/layout" component={LayoutDemo}/>
                </Content>
            </div>
            <Footer className="site-footer">
                <ul>
                    <li>
                        <Icon name="github"/>
                        <span> Github</span>
                    </li>
                    <li> &copy; suyuan</li>
                </ul>
            </Footer>
        </div>
    </Router>,
    document.getElementById('root')
);
