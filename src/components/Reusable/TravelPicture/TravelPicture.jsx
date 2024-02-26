import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PencilIcon } from '@heroicons/react/24/solid';
import './TravelPicture.scss';

import {
  handleRemoveTravelPicture,
  setNewPicture,
} from '../../../actions/trip';

const TravelPicture = () => {
  const dispatch = useDispatch();

  // Get the current trip picture URL and trip ID from the Redux store
  const currentPicture = useSelector(
    (state) => state.trip.trip.backgroundPictureURL
  );
  const tripId = useSelector((state) => state.trip.trip.id);

  // Handle the change when a new photo is selected
  const handlePhotoChange = (event) => {
    // Get the selected file
    const file = event.target.files[0];
    // If a file is selected, process it (e.g., display it)
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Dispatch Redux actions to set the new picture and remove the current picture
        dispatch(setNewPicture(reader.result));
        dispatch(handleRemoveTravelPicture(tripId));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="TravelPicture">
      {/* Display the current trip photo (either currentPhoto or newPhoto) */}
      <img src={currentPicture} alt="cover for the trip" className="photo" />

      {/* Icon to upload a new photo */}
      <label htmlFor="photo-upload" className="upload-icon">
        <input
          type="file"
          id="photo-upload"
          accept="image/*"
          onChange={handlePhotoChange}
        />
        <PencilIcon className="icon" />
      </label>
    </div>
  );
};

export default TravelPicture;
