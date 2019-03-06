import React from 'react';
import { shallow } from 'enzyme';
import CustomInput from './';

describe('Test CustomInput Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CustomInput />);
    expect(wrapper.exists()).toBe(true);
  });
});
