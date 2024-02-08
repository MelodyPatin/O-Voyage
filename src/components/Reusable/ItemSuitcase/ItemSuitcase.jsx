import React from 'react';
import './ItemSuitcase.scss';
import { Checkbox, Input } from 'semantic-ui-react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';

const ItemSuitcase = ({ textContent }) => {
  return (
    <div className="ItemSuitcase">
      <Checkbox className="checkbox" />
      <Input className="input" />
      <CheckIcon className="icon" />
      <XMarkIcon className="icon" />
    </div>
  );
};

ItemSuitcase.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default ItemSuitcase;
