import renderer from "react-test-renderer";
import Icon from "../icon";
import React from "react";


describe('icon',()=>{
    it('是一个 svg',()=>{
        const json = renderer.create(<Icon/>).toJSON()
        expect(json).toMatchSnapshot()
    })
})