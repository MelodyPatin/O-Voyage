import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addPicture } from '../../../../../actions/gallery';
import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';

const AddPictureButton = () => {
  const { tripId } = useParams();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.gallery.currentPage);

  const fileInputRef = useRef(null);

  const handleAddPhoto = () => {
    // Trigger click on the hidden file input
    fileInputRef.current.click();
  };

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

  // Handle file selection
  const handleFileChange = async (event) => {
    const { files } = event.target;

    // Dispatch the action to add the new photo (you can modify this based on your needs)
    // For example, dispatching the action with the first selected file
    if (files.length > 0) {
      try {
        const base64Data = await convertFileToBase64(files[0]);

        // Assuming your API call to add a picture is synchronous
        await dispatch(addPicture(tripId, base64Data, currentPage));

        // Optionally, you can dispatch a FETCH_PICTURES action to ensure the list is up-to-date
        // dispatch(fetchPictures(tripId));
      } catch (error) {
        console.error(error);
        // Handle the error
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
        <SimpleButton
          onClick={handleAddPhoto}
          textContent="Ajouter une photo"
        />
      </label>
    </div>
  );
};

export default AddPictureButton;
