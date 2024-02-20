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

export const useSetActivityRating = (activityId) => {
  const [currentRating, setCurrentRating] = useState(null);

  const setActivityRating = async (newRating) => {
    try {
      const existingVoteResponse = await api.get(`/vote/${activityId}/`);
      const existingVote = existingVoteResponse.data.rating;

      console.log(existingVote);

      console.log(newRating);

      if (existingVote !== 0) {
        await api.delete(`/vote/${activityId}`);
        setCurrentRating(null);
      }
      if (newRating !== null) {
        await api.post(`/vote/${activityId}`, { rating: newRating });
        setCurrentRating(newRating);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [currentRating, setActivityRating];
};
