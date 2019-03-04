import React from 'react';
import App from './';
import { shallow } from 'enzyme';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
   Map: () => ({})
}));


it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Map').length).toBe(1);
});
