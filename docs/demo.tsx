import React from "react";
import Highlight, {defaultProps} from "prism-react-renderer";

interface Props {
    code: string
}

const Demo: React.FunctionComponent<Props> = (props) => {
    const code = (
        <Highlight {...defaultProps} code={props.code} language="jsx">
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({line, key: i})}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({token, key})} />
                                    ))}
                                </div>
                            ))}
                        </pre>
            )}
        </Highlight>
    )
    return (
        <div>
            <div className="example">
                {props.children}
            </div>
            <h4>代码</h4>
            <div>
                {code}
            </div>
        </div>
    )
}

export default Demo