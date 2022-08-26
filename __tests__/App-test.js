/**
 * @format
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Climate from '../Components/Climate';
import Details from '../Src/Details';
import Home, {handlefetch} from '../Src/Home';

test('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
  const tree2 = renderer.create(<Climate />).toJSON();
  expect(tree2).toMatchSnapshot();
  const tree3 = renderer.create(<Details />).toJSON();
  expect(tree3).toMatchSnapshot();
});

const axios = require('axios');

jest.mock('axios');
it('API call test', async () => {
  axios.get.mockResolvedValue({
    data: {
      base: 'stations',
      clouds: {all: 89},
      cod: 200,
      coord: {lat: 10.95, lon: 78.0833},
      dt: 1661442234,
      id: 1267648,
      main: {
        feels_like: 26.17,
        grnd_level: 994,
        humidity: 78,
        pressure: 1007,
        sea_level: 1007,
        temp: 26.17,
        temp_max: 26.17,
        temp_min: 26.17,
      },
      name: 'Karur',
      sys: {country: 'IN', sunrise: 1661387888, sunset: 1661432522},
      timezone: 19800,
      visibility: 10000,
      weather: [
        {description: 'overcast clouds', icon: '04n', id: 804, main: 'Clouds'},
      ],
      wind: {deg: 279, gust: 8.28, speed: 4.71},
    },
  });
  const title = await handlefetch();
  expect(title.name).toEqual('Karur');
});
