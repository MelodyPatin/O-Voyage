import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PencilIcon } from '@heroicons/react/24/solid';
import './TravelPicture.scss';
import { useParams } from 'react-router-dom';
import { updateTripCover } from '../../../actions/trip';

// Component that displays and allows the members of the trip to upload the travel cover photo
const TravelPicture = () => {
  const currentTrip = useSelector((state) => state.trip.trip);
  const dispatch = useDispatch();
  const { tripId } = useParams();

  // State to store the new photo selected by the user
  const [newPhoto, setNewPhoto] = useState(null);

  // Function to handle changes when a new photo is selected
  const handlePhotoChange = (event) => {
    console.log(event);
    const file = event.target.files[0];
    // If a file
    if (file) {
      // Create a new instance of FileReader
      const reader = new FileReader();
      // Set up an event listener for when the file has been read
      reader.onload = () => {
        dispatch(updateTripCover(tripId));
        // When the file is successfully read, update the state with the result
        setNewPhoto(reader.result);
      };
      // Read the contents of the file as a data URL
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="TravelPicture">
      {/* Display the photo (either newPhoto or currentPhoto) */}
      <img
        src={newPhoto || currentTrip?.backgroundPictureURL}
        alt="cover for the travel"
        className="photo"
      />

      {/* Icon to trigger the file upload input */}
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
