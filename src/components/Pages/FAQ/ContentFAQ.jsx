/* eslint-disable react/no-unescaped-entities */
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchFaqContent } from '../../../actions/content';

// const ContentFAQ = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchFaqContent());
//   }, [dispatch]);

//   return (
//     <ul className="faqContent">
//       <li>
//         <p className="question">
//           Comment puis-je créer un voyage sur la plateforme ?
//         </p>
//         <p className="answer">
//           Pour créer un voyage, connectez-vous à votre compte, accédez à votre
//           tableau de bord et cliquez sur "Créer un voyage". Remplissez les
//           détails requis, invitez vos amis et commencez à planifier ensemble !
//         </p>
//       </li>
//       <li>
//         <p className="question">Comment ajouter des activités à un voyage ?</p>
//         <p className="answer">
//           Une fois dans le voyage, utilisez le bouton "Faire une proposition"
//           pour proposer des activités, visites, restaurants ou bars. Les autres
//           participants pourront voter pour leurs préférences, et les activités
//           les plus populaires seront intégrées à l'itinéraire.
//         </p>
//       </li>
//       <li>
//         <p className="question">
//           Comment fonctionne le système de vote pour les activités ?{' '}
//         </p>
//         <p className="answer">
//           Chaque participant peut voter pour les activités proposées. Les
//           activités sont classées en fonction du nombre de likes reçus. Cela
//           permet d'organiser un itinéraire basé sur les préférences collectives.
//         </p>
//       </li>
//     </ul>
//   );
// };

// export default ContentFAQ;

/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFaqContent } from '../../../actions/content';

const ContentFAQ = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content.contentFaq);
  console.log(`faq : ${content}`);

  useEffect(() => {
    dispatch(fetchFaqContent());
  }, [dispatch]);

  return <div className="faqContent">{content.content}</div>;
};

export default ContentFAQ;
