import React from 'react';
import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../Reusable/ReturnTitle/ReturnTitle';
import Footer from '../../Reusable/Footer/Footer';
import './FAQ.scss';
import ContentFAQ from './ContentFAQ';

const FAQ = () => {
  return (
    <div>
      <NavBarHeader />
      <ReturnTitle textContent="FAQ" />
      <ContentFAQ />
      <Footer />
    </div>
  );
};

export default FAQ;
