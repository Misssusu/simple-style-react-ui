import React from 'react';
import ReactDom from 'react-dom';
import Button from './button';
import Icon from './icon';

ReactDom.render(
    <div>
        <Button/>
        <Icon name='wechat'/>
    </div>,
    document.body);