import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../Reusable/ReturnTitle/ReturnTitle';
import Footer from '../../Reusable/Footer/Footer';
import './History.scss';
import ContentHistory from './components/ContentHistory';
import { fetchHistoryContent } from '../../../actions/content';

const History = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHistoryContent());
  }, [dispatch]);

  return (
    <div className="history">
      <NavBarHeader />
      <ReturnTitle textContent="Notre Histoire" />
      <ContentHistory />
      <Footer />
    </div>
  );
};

export default History;
