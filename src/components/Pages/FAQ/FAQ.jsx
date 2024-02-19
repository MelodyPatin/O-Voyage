import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../Reusable/ReturnTitle/ReturnTitle';
import Footer from '../../Reusable/Footer/Footer';
import './FAQ.scss';
import ContentFAQ from './ContentFAQ';
import { fetchFaqContent } from '../../../actions/content';

const FAQ = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFaqContent());
  }, [dispatch]);

  return (
    <div className="faq">
      <NavBarHeader />
      <ReturnTitle textContent="FAQ" />
      <ContentFAQ />
      <Footer />
    </div>
  );
};

export default FAQ;
