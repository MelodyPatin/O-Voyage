import React from 'react';
import './ItemSuitcase.scss';
import { Checkbox, Input } from 'semantic-ui-react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';

const ItemSuitcase = ({ textContent }) => {
  return (
    <div className="ItemSuitcase">
      {/* Checkbox for item completion status */}
      <Checkbox className="checkbox" />
      {/* Input for item text */}
      <Input className="input" />
      {/* CheckIcon for indicating item completion */}
      <CheckIcon className="icon" />
      {/* XMarkIcon for indicating item deletion or non-completion */}
      <XMarkIcon className="icon" />
    </div>
  );
};

ItemSuitcase.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default ItemSuitcase;
