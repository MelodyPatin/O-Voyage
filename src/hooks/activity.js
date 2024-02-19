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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setActivityRating = async (newRating) => {
    try {
      setIsSubmitting(true);

      // Vérifier si l'utilisateur a déjà voté pour cette activité
      const existingVoteResponse = await api.get(`/vote/${activityId}/`);
      const existingVote = existingVoteResponse.data.rating;

      if (existingVote !== null) {
        await api.delete(`/vote/${activityId}/`);
      }
      // Ajouter le nouveau vote
      if (newRating !== null) {
        await api.post(`/vote/${activityId}/`, { vote: newRating });
      }

      // Mettre à jour l'état local avec le nouveau vote
      setCurrentRating(newRating);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return [currentRating, setActivityRating, isSubmitting];
};

// export const useSetActivityRating = (activityId) => {
//   const [currentRating, setCurrentRating] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const setActivityRating = async (newRating) => {
//     try {
//       setIsSubmitting(true);

//       // Vérifier si l'utilisateur a déjà voté pour cette activité
//       const existingVoteResponse = await api.get(`/vote/${activityId}/`);
//       const existingVote = existingVoteResponse.data.rating;

//       // Si l'utilisateur a déjà voté avec la même note, annuler le vote
//       if (existingVote === newRating) {
//         // Supprimer l'ancien vote
//         await api.delete(`/vote/${activityId}/`);
//         setCurrentRating(null);
//       } else {
//         // Sinon, supprimer l'ancien vote s'il existe
//         if (existingVote !== null) {
//           await api.delete(`/vote/${activityId}/`);
//         }

//         // Ajouter le nouveau vote
//         if (newRating !== null) {
//           await api.post(`/vote/${activityId}/`, { vote: newRating });
//         }

//         // Mettre à jour l'état local avec le nouveau vote
//         setCurrentRating(newRating);
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return [currentRating, setActivityRating, isSubmitting];
// };
