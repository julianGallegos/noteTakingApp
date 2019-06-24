import expect from 'expect';
import {
  configure,
  shallow,
  mount
} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import SampleChildComponentWithState from './index';
import SampleStatelessComponent from '../../components/SampleStatelessComponent'

configure({ adapter: new Adapter() });

describe('SampleChildComponentWithState', () => {
  it('renders the SampleStatelessComponent', () => {
    const component = mount(<SampleChildComponentWithState />)
    expect(component.find(SampleStatelessComponent)).toHaveLength(1);
  })
})
