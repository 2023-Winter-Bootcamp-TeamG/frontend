/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';

import frame2 from '../../../assets/frame/2x2_l.png';
import frame1 from '../../../assets/frame/2x2_w.png';
import frame3 from '../../../assets/frame/4x1_l.png';

export default function Cut4() {
  const navigate = useNavigate();
  const handleImageClick1 = () => {
    const imageSrc = '2x2_w';
    navigate('/photo/Background', { state: imageSrc });
  };
  const handleImageClick2 = () => {
    const imageSrc = '2x2_l';
    navigate('/photo/Background', { state: imageSrc });
  };
  // const handleImageClick3 = () => {
  //   const imageSrc = '4x1';
  //   navigate('/photo/Background', { state: imageSrc });
  // };
  return (
    <div className="flex items-center p-10">
      {/* <div className="relative h-96 group">
        <img
          src={frame3}
          alt="frame3"
          className="overflow-hidden transition-transform origin-center transform h-96 group-hover:scale-105"
          onClick={() => {
            handleImageClick3();
          }}
        />
      </div>
      <div className="m-12" /> */}
      <div className="relative h-80 group">
        <img
          src={frame2}
          alt="frame2"
          className="overflow-hidden transition-transform origin-center transform h-80 group-hover:scale-105"
          onClick={() => {
            handleImageClick2();
          }}
        />
      </div>
      <div className="m-12" />
      <div className="relative h-60 group">
        <img
          src={frame1}
          alt="frame1"
          className="overflow-hidden transition-transform origin-center transform h-60 group-hover:scale-105"
          onClick={() => {
            handleImageClick1();
          }}
        />
      </div>
    </div>
  );
}
