import Button from '../button/button'
import React from 'react'
import renderer from 'react-test-renderer'

describe('button',()=>{
    it('是一个div',()=>{
        const json = renderer.create(<Button/>).toJSON()
        expect(json).toMatchSnapshot()
    })
})