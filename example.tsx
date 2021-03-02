import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Link } from "react-router-dom";
import IconExample from "./lib/icon/icon.example";
import ButtonExample from "./lib/button/button.example";
import InputExample from "./lib/input/input.example";

ReactDOM.render(
    <Router>
        <div>
            <header>
                <div>simple-style-ui</div>
            </header>
            <div>
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to="/icon">Icon</Link>
                        </li>
                        <li>
                            <Link to="/button">Button</Link>
                        </li>
                        <li>
                            <Link to="/input">Input</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path="/icon" component={IconExample}/>
                    <Route path="/button" component={ButtonExample}/>
                    <Route path="/input" component={InputExample}/>
                </main>
            </div>
        </div>
    </Router>,
    document.getElementById('root')
)