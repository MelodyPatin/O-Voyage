import React from 'react';
import './Presentation.scss';
import View from '../../../../assets/View1.png';

const Presentation = () => {
  return (
    <div className="presentation">
      <img src={View} alt="" />
      <div>
        <h2 className="title">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor.
        </h2>
        <p className="content">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris.
        </p>
        <p className="content">
          Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
          auctor ornare leo, non suscipit magna interdum eu. Curabitur
          pellentesque nibh nibh, at.
        </p>
      </div>
    </div>
  );
};

export default Presentation;
