import React from 'react';
import './LastPart.scss';
import Screens from '../../../../assets/Screens.png';

const LastPart = () => {
  return (
    <div className="lastPart">
      <img src={Screens} alt="mockups" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis imperdiet augue. Vestibulum auctor.
      </p>
    </div>
  );
};

export default LastPart;
