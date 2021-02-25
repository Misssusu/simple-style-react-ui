import renderer from "react-test-renderer";
import Icon from "../icon";
import React from "react";
import { mount } from "enzyme";


describe('icon',()=>{
    it('是一个 svg',()=>{
        const json = renderer.create(<Icon name="wechat"/>).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('onClick',()=>{
        let n = 1;
        const fn = () =>{
            n = 2;
        }
        const component = mount(<Icon name="wechat" onClick={fn} />)
        component.find('svg').simulate('click')
        expect(n).toEqual(2)
    })
})