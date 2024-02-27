import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';

import { addPicture } from '../../../../../actions/gallery';

const AddPictureButton = () => {
  // Extracting tripId from the URL params
  const { tripId } = useParams();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.gallery.currentPage);

  // Ref for the hidden file input element
  const fileInputRef = useRef(null);

  // Function to trigger the file input click when the "Ajouter une photo" button is clicked
  const handleAddPhoto = () => {
    // Trigger click on the hidden file input
    fileInputRef.current.click();
  };

  // Function to convert a file to base64 format using FileReader
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

  // Handle file selection and dispatching the action to add the picture
  const handleFileChange = async (event) => {
    const { files } = event.target;

    if (files.length > 0) {
      try {
        const base64Data = await convertFileToBase64(files[0]);
        await dispatch(addPicture(tripId, base64Data, currentPage));
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <label htmlFor="photo-upload" className="upload-icon">
        <input
          type="file"
          id="photo-upload"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef} // Connect the ref to the input element
          style={{ display: 'none' }} // Hide the input
        />
        {/* Button triggering the hidden file input */}
        <SimpleButton
          onClick={handleAddPhoto}
          textContent="Ajouter une photo"
        />
      </label>
    </div>
  );
};

export default AddPictureButton;
