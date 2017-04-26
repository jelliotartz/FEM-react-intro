import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ShowCard from './ShowCard'

test('ShowCard snapshot test', () => {
  const component = shallow(<ShowCard />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})


