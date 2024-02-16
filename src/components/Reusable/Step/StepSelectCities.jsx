import React from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import SimpleButton from '../SimpleButton/SimpleButton';
import MultipleSelector from '../MultipleSelector/MultipleSelector';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedCities } from '../../../actions/trip';

const StepSelectCities = ({
  buttonContent,
  placeholderContent,
  labelContent,
  options,
  handleClick,
}) => {
  const dispatch = useDispatch();

  const handleSelectionChange = (selected) => {
    dispatch(updateSelectedCities(selected));
  };
  
  const selected = useSelector((state) => state.trip.selectedCities);

  return (
    <div className="StepSelect">
      <form action="">
        <div className="LabelInput">
          <p>{labelContent}</p>
          <MultipleSelector
            placeholderContent={placeholderContent}
            options={options}
            selected={selected}
            onChange={handleSelectionChange}
          />
        </div>
        <SimpleButton
          textContent={buttonContent}
          onClick={handleClick}
        />
      </form>
    </div>
  );
};

StepSelectCities.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  placeholderContent: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StepSelectCities;
