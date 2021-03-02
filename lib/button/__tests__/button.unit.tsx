import Button from '../button'
import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from "enzyme";

describe('button',()=>{
    it('是一个div',()=>{
        const json = renderer.create(<Button/>).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('onClick',()=>{
        let n = 1;
        const fn = () =>{
            n = 2;
        }
        const component = mount(<Button type="default" onClick={fn} />)
        component.find('svg').simulate('click')
        expect(n).toEqual(2)
    })
})