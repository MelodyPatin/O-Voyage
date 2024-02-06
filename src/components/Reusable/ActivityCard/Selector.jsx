import React from 'react';
import { Select } from 'semantic-ui-react';

const countryOptions = [
  { key: 'd1', value: 'd1', text: 'Jour 1' },
  { key: 'd2', value: 'd2', text: 'Jour 2' },
  { key: 'd3', value: 'd3', text: 'Jour 3' },
  { key: 'd4', value: 'd4', text: 'Jour 4' },
  { key: 'd5', value: 'd5', text: 'Jour 5' },
  { key: 'd6', value: 'd6', text: 'Jour 6' },
  { key: 'd7', value: 'd7', text: 'Jour 7' },
];

const Selector = () => (
  <Select
    placeholder="Select your country"
    options={countryOptions}
    className="custom-select"
  />
);

export default Selector;
