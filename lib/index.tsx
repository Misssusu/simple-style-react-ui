import React from 'react';
import ReactDom from 'react-dom';
import Button from './button';
import Icon from './icon/icon';

const clickHandel: React.MouseEventHandler = (e) =>{
    console.log('click');
    console.log(e);
}

ReactDom.render(
    <div>
        <Button/>
        <Icon name='wechat' onClick={clickHandel}/>
    </div>,
    document.querySelector('#root'));