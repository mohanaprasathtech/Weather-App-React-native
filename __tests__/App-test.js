/**
 * @format
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../Src/Details';
import Home from '../Src/Home';

test('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
  const tree2 = renderer.create(<Details />).toJSON();
  expect(tree2).toMatchSnapshot();
});
