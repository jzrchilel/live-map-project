import React from 'react';
import App from './';
import { shallow } from 'enzyme';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
   Map: () => ({})
}));

describe('Testing App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').length).toBe(1);
  });
});
