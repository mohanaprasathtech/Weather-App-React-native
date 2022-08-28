/**
 * @format
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Climate from '../Components/Climate';
import Details from '../Src/Details';
import Home, {handlefetch, populationdata} from '../Src/Home';
import Country from '../Src/Country';

test('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
  const tree2 = renderer.create(<Climate />).toJSON();
  expect(tree2).toMatchSnapshot();
  const tree3 = renderer.create(<Details />).toJSON();
  expect(tree3).toMatchSnapshot();
  const tree4 = renderer.create(<Country />).toJSON();
  expect(tree4).toMatchSnapshot();
});

const axios = require('axios');

jest.mock('axios');
it('API call test-1', async () => {
  axios.get.mockResolvedValue({
    data: {
      location: {
        name: 'New Delhi',
        region: 'Delhi',
        country: 'India',
        lat: 28.6,
        lon: 77.2,
        tz_id: 'Asia/Kolkata',
        localtime_epoch: 1661543422,
        localtime: '2022-08-27 1:20',
      },
      current: {
        last_updated_epoch: 1661543100,
        last_updated: '2022-08-27 01:15',
        temp_c: 29.0,
        temp_f: 84.2,
        is_day: 0,
        condition: {
          text: 'Mist',
          icon: '//cdn.weatherapi.com/weather/64x64/night/143.png',
          code: 1030,
        },
        wind_mph: 5.6,
        wind_kph: 9.0,
        wind_degree: 260,
        wind_dir: 'W',
        pressure_mb: 1004.0,
        pressure_in: 29.65,
        precip_mm: 0.0,
        precip_in: 0.0,
        humidity: 79,
        cloud: 50,
        feelslike_c: 30.4,
        feelslike_f: 86.7,
        vis_km: 3.5,
        vis_miles: 2.0,
        uv: 1.0,
        gust_mph: 11.2,
        gust_kph: 18.0,
        air_quality: {
          co: 383.8999938964844,
          no2: 10.699999809265137,
          o3: 79.4000015258789,
          so2: 11.899999618530273,
          pm2_5: 28.299999237060547,
          pm10: 37.20000076293945,
          'us-epa-index': 2,
          'gb-defra-index': 3,
        },
      },
    },
  });
  const title = await handlefetch();
  expect(title.location.lat).toEqual(28.6);
});
