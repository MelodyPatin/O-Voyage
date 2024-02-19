import { useState, useEffect } from 'react';
import api from '../api';

// eslint-disable-next-line import/prefer-default-export
export const useActivityRating = (activityId) => {
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .get(`/vote/${activityId}/`)
      .then((response) => {
        const activityRating = response.data.rating;
        setRating(activityRating);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [activityId]);

  return [rating, isLoading];
};
