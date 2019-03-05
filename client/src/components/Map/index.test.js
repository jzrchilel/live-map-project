import React from 'react';
import ReactMapGL from 'react-map-gl';
import { Map } from './';
import Popup from '../Popup';
import Marker from '../Marker';
import Controls from '../Controls';
import { mount, shallow } from 'enzyme';

describe('Testing Map Component', () => {
  it('should not render if there is not cities data', () => {
    const props = {
      fetchCities: jest.fn(),
      cities: {
        data: []
      }
    }
    const wrapper = shallow(<Map {...props } />);
    expect(wrapper.find(ReactMapGL).length).toBe(0);
  });

  it('should render components needed to rente map', () => {
    const props = {
      fetchCities: jest.fn(),
      cities: {
        data: [{
          _id: 123,
          name: 'mark',
          status: false,
          latitude: 98.87651,
          longitude: -0.0000
        }]
      }
    }
    const wrapper = shallow(<Map {...props } />);
    expect(wrapper.find(ReactMapGL).length).toBe(1);
    expect(wrapper.find(Marker).length).toBe(1);
    expect(wrapper.find(Popup).length).toBe(1);
    expect(wrapper.find(Controls).length).toBe(1);
  });
});
