import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import '../styles/swiper.scss';
import styled from 'styled-components';
import Arrow from '../assets/icons/arrow.svg';

SwiperCore.use([Navigation]);

const SectionStyles = styled.section`
  height: 80vh;
  max-height: 100vw;
  width: 100%;
  position: relative;

  .title-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    text-align: center;

    @media (min-width: 700px) {
      width: 75%;
    }

    .heading {
      text-align: center;
      padding: 4rem;
      color: var(--white);
    }
  }
`;

export default function GalleryHeader({ images, title }) {
  return (
    <SectionStyles>
      <div className="title-wrapper">
        <h1 className="heading heading-01">{title}</h1>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        loop={images.length > 1}
        className={images.length > 1 ? null : 'disabled'}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              srcSet={image.asset.fluid.srcSet}
              sizes={image.asset.fluid.sizes}
              src={image.asset.fluid.src}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {images.length > 1 && (
        <>
          <div className="prev">
            <img src={Arrow} alt="previous" />
          </div>
          <div className="next">
            <img src={Arrow} alt="next" />
          </div>
        </>
      )}
    </SectionStyles>
  );
}
