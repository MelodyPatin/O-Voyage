import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Accordion } from 'semantic-ui-react';
import { useMediaQuery } from '@mui/material';

import './FilterList.scss';

import ReturnTitle from '../../../../../Reusable/ReturnTitle/ReturnTitle';
import SimpleButton from '../../../../../Reusable/Buttons/SimpleButton';

import { fetchATrip } from '../../../../../../actions/trip';
import { fetchTags } from '../../../../../../actions/activity';
import { updateFilters } from '../../../../../../actions/filters';

const FilterList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tripId } = useParams();

  // Media query hook for responsive design
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const currentTrip = useSelector((state) => state.trip.trip);
  const tags = useSelector((state) => state.activity.tags);
  const cities = currentTrip ? currentTrip.cities : [];

  // State for selected tags, cities, and days
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);

  // Fetch trip details and tags on component mount
  useEffect(() => {
    dispatch(fetchATrip(tripId));
    dispatch(fetchTags());
  }, [dispatch, tripId]);

  // Handler to navigate back
  const handleGoBack = () => {
    navigate(-1);
  };

  // Function to format date for display
  const formatDateDisplay = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  // Function to format date to ISO string
  const formatDateISO = (date) => {
    return new Date(date).toISOString();
  };

  // Function to generate date options for the Accordion
  const generateDateOptions = () => {
    let startDate = new Date(currentTrip.startDate);
    const endDate = new Date(currentTrip.endDate);
    const dateOptions = [];

    while (startDate <= endDate) {
      const dateValue = formatDateISO(startDate);
      const dateText = formatDateDisplay(startDate);
      const isDaySelected = selectedDays.includes(dateValue);
      dateOptions.push(
        <div
          key={dateValue}
          className={`dayOption ${isDaySelected ? 'selected' : ''}`}
          onClick={() => handleDayClick(dateValue)}
        >
          <p>{dateText}</p>
        </div>
      );
      startDate = new Date(startDate.setDate(startDate.getDate() + 1));
    }

    return dateOptions;
  };

  // Generate date options on component mount
  const dayOptions = generateDateOptions();

  // Handler for day click to update selected days
  const handleDayClick = (dateValue) => {
    setSelectedDays((prevSelectedDays) => {
      const isSelected = prevSelectedDays.includes(dateValue);

      if (isSelected) {
        // If the date is already selected, remove it from the list
        return prevSelectedDays.filter((day) => day !== dateValue);
      }
      // If the date is not selected, add it to the list
      return [...prevSelectedDays, dateValue];
    });
  };

  useEffect(() => {
    // Effect triggered whenever selectedDays changes
    dispatch(
      updateFilters({
        selectedTags,
        selectedDays,
        selectedCities,
      })
    );
  }, [selectedDays, dispatch, selectedTags, selectedCities]);

  // Handler for city click to update selected cities
  const handleCityClick = (cityValue) => {
    setSelectedCities((prevSelectedCities) => {
      const isSelected = prevSelectedCities.includes(cityValue);

      if (isSelected) {
        // If the city is already selected, remove it from the list
        return prevSelectedCities.filter((city) => city !== cityValue);
      }
      // If the city is not selected, add it to the list
      return [...prevSelectedCities, cityValue];
    });
  };

  useEffect(() => {
    // Effect triggered whenever selectedCities changes
    dispatch(
      updateFilters({
        selectedTags,
        selectedDays,
        selectedCities,
      })
    );
  }, [selectedCities, dispatch, selectedTags, selectedDays]);

  // Handler for tag click to update selected tags
  const handleTagClick = (tagValue) => {
    setSelectedTags((prevSelectedTags) => {
      const isSelected = prevSelectedTags.includes(tagValue);

      if (isSelected) {
        // If the tag is already selected, remove it from the list
        return prevSelectedTags.filter((tag) => tag !== tagValue);
      }
      // If the tag is not selected, add it to the list
      return [...prevSelectedTags, tagValue];
    });
  };

  useEffect(() => {
    // Effect triggered whenever selectedTags changes
    dispatch(
      updateFilters({
        selectedTags,
        selectedDays,
        selectedCities,
      })
    );
  }, [selectedTags, dispatch, selectedDays, selectedCities]);

  // Accordion panels for categories, days, and cities
  const panels = [
    {
      key: 'panel-1',
      title: 'Catégories',
      content: tags.map((tag) => (
        <div
          key={tag.id}
          onClick={() => handleTagClick(tag.name)}
          style={{
            color: selectedTags.includes(tag.name) ? '#f7f0e7' : tag.color,
            border: `2px solid ${tag.color}`,
            backgroundColor: selectedTags.includes(tag.name)
              ? tag.color
              : 'transparent',
          }}
          className="tagOptions"
        >
          {tag.name}
        </div>
      )),
    },
    {
      key: 'panel-2',
      title: 'Jours',
      content: dayOptions,
    },
    {
      key: 'panel-3',
      title: 'Villes',
      content:
        cities &&
        cities.map((city, index) => (
          <div
            key={index}
            className={`cityOption ${
              selectedCities.includes(city.name) ? 'selected' : ''
            }`}
            onClick={() => handleCityClick(city.name)}
          >
            {city.name}
          </div>
        )),
    },
  ];

  return (
    <div className="filterList">
      <ReturnTitle textContent="Filtrer" />
      <div className="filters">
        <Accordion panels={panels} exclusive={false} fluid />
        {isMobile && (
          <SimpleButton textContent="Filtrer" onClick={handleGoBack} />
        )}
      </div>
    </div>
  );
};

export default FilterList;
