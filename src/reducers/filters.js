import { UPDATE_FILTERS } from '../actions/filters';

const initialState = {
  selectedTags: [],
  selectedDays: [],
  selectedCities: [],
};

const filtersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return {
        ...state,
        ...action.filters,
      };
    default:
      return state;
  }
};

export default filtersReducer;
