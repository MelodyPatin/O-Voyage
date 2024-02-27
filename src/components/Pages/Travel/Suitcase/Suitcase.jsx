import { useSelector, useDispatch } from 'react-redux'; // Importez useSelector
import { fetchListRequest } from '../../../../actions/suitcase';
import { useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import TravelsMenu from '../../../Reusable/TravelsMenu/TravelsMenu';
import SuitcaseList from './Components/SuitcaseList';
import Activities from '../Activity/Activities/Activities';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import GeneralInfos from '../Details/Components/GeneralInfos';
import NavBarMobile from '../../../Reusable/NavBarMobile/NavBarMobile';

const Suitcase = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { tripId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatchez l'action pour récupérer la liste lorsque le composant est monté
    dispatch(fetchListRequest(tripId));
  }, []); // Ajoutez tripId à la liste de dépendances de useEffect

  // Utilisez useSelector pour extraire tripId de l'état Redux
  const tripIdRedux = useSelector(state => state.tripId);

  return (
    <div className="suitcase">
      {!isMobile ? (
        <>
          <NavBarHeader />
          <TravelsMenu />
          <div className="containerFlex">
            <aside className="aside">
              {/* Passez tripId comme prop à SuitcaseList */}
              <SuitcaseList tripId={tripIdRedux} />
            </aside>
            <Activities />
          </div>
        </>
      ) : (
        <>
          <HeaderConnected />
          <TravelsMenu />
          <GeneralInfos />
          {/* Passez tripId comme prop à SuitcaseList */}
          <SuitcaseList tripId={tripIdRedux} />
          <NavBarMobile />
        </>
      )}
    </div>
  );
};

export default Suitcase;
