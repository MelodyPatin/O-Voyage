import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Accordion } from 'semantic-ui-react';
import ReturnTitle from '../../../../../Reusable/ReturnTitle/ReturnTitle';

import './FilterList.scss';

import SimpleButton from '../../../../../Reusable/Buttons/SimpleButton';
import { fetchATrip } from '../../../../../../actions/trip';
import { fetchTags } from '../../../../../../actions/activity';
import { updateFilters } from '../../../../../../actions/filters';

const FilterList = () => {
  const dispatch = useDispatch();
  const { tripId } = useParams();

  useEffect(() => {
    dispatch(fetchATrip(tripId));
    dispatch(fetchTags());
  }, [dispatch, tripId]);

  const currentTrip = useSelector((state) => state.trip.trip);
  const tags = useSelector((state) => state.activity.tags);
  const cities = currentTrip ? currentTrip.cities : [];

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);

  const formatDateDisplay = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatDateISO = (date) => {
    return new Date(date).toISOString();
  };

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

  const dayOptions = generateDateOptions();

  const handleDayClick = (dateValue) => {
    // Use the functional form to ensure the most up-to-date state
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
    // This effect will be triggered whenever selectedDays changes
    dispatch(
      updateFilters({
        selectedTags,
        selectedDays,
        selectedCities,
      })
    );
  }, [selectedDays, dispatch, selectedTags, selectedCities]);

  const handleCityClick = (cityValue) => {
    // Use the functional form to ensure the most up-to-date state
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
    // This effect will be triggered whenever selectedCities changes
    dispatch(
      updateFilters({
        selectedTags,
        selectedDays,
        selectedCities,
      })
    );
  }, [selectedCities, dispatch, selectedTags, selectedDays]);

  const handleTagClick = (tagValue) => {
    // Use the functional form to ensure the most up-to-date state
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
    // This effect will be triggered whenever selectedTags changes
    dispatch(
      updateFilters({
        selectedTags,
        selectedDays,
        selectedCities,
      })
    );
  }, [selectedTags, dispatch, selectedDays, selectedCities]);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    // Logique pour traiter les filtres sélectionnés ou déclencher une action
  };
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
      <form className="filters" onSubmit={handleFilterSubmit}>
        <p>Reinitialiser tous les filtres</p>
        <Accordion
          defaultActiveIndex={[0, 2]}
          panels={panels}
          exclusive={false}
          fluid
        />
        <SimpleButton textContent="Filtrer" />
      </form>
    </div>
  );
};

export default FilterList;

// import React from 'react';
// import { Accordion } from 'semantic-ui-react';
// import ReturnTitle from '../../../../../Reusable/ReturnTitle/ReturnTitle';

// import './FilterList.scss';
// import SimpleButton from '../../../../../Reusable/Buttons/SimpleButton';

// const FilterList = () => {
//   const handleFilterSubmit = (e) => {
//     e.preventDefault();
//     // Logique pour traiter les filtres sélectionnés ou déclencher une action
//   };
//   const panels = [
//     {
//       key: 'panel-1',
//       title: 'Tag',
//       content: 'Contenu pour Tags',
//     },
//     {
//       key: 'panel-2',
//       title: 'Jours',
//       content: 'Contenu pour Jours',
//     },
//     {
//       key: 'panel-3',
//       title: 'Villes',
//       content: 'Contenu pour Ville',
//     },
//     {
//       key: 'panel-4',
//       title: 'Pays',
//       content: 'Contenu pour Pays',
//     },
//   ];

//   return (
//     <div className="filterList">
//       <ReturnTitle textContent="Filtrer" />
//       <form className="filters" onSubmit={handleFilterSubmit}>
//         <p>Reinitialiser tous les filtres</p>
//         <Accordion
//           defaultActiveIndex={[0, 2]}
//           panels={panels}
//           exclusive={false}
//           fluid
//         />
//         <SimpleButton textContent="Filtrer" />
//       </form>
//     </div>
//   );
// };

// export default FilterList;
