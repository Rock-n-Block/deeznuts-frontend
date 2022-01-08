// import styles from './styles.module.scss';
import React, { FC, PropsWithChildren, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import cx from 'classnames';
import arrowLeft from '../../../assets/img/icons/arrowLeft.svg';

// Import Swiper styles
import 'swiper/swiper.scss';

import styles from './styles.module.scss';

type Props = {
  //   classNameArrowLeft?: string;
  //   classNameArrowRight?: string;
  //   classNameProp?: string;
  //   slidesToShow?: number;
  //   hideArrows?: boolean;
  //   responsive?: ResponsiveObject[];
  //   dots?: boolean;
  //   classNameSlide?: string;
  //   classNameSlideActive?: string;
  //   showArrows?: boolean;
};

const SimpleSwiper: FC<PropsWithChildren<Props>> = ({
  // classNameProp,
  children,
  // // classNameArrowRight,
  // slidesToShow = 1,
  // // responsive,
  // dots = false,
  // classNameSlide,
  // classNameSlideActive,
  // showArrows = false,
}) => {
  const navigationPrevRef = useRef<any>();
  const navigationNextRef = useRef<any>();

  SwiperCore.use([Navigation]);

  return (
    <div className={styles.swiper}>
      <button
        type="button"
        className={cx(styles.arrow, styles.arrowLeft)}
        ref={navigationPrevRef}
        onClick={(e) => e.preventDefault()}
      >
        <img src={arrowLeft} alt="" />
      </button>
      <button
        type="button"
        className={cx(styles.arrow, styles.arrowRight)}
        ref={navigationNextRef}
        onClick={(e) => e.preventDefault()}
      >
        <img src={arrowLeft} alt="" />
      </button>
      <Swiper
        slidesPerView={1}
        centeredSlides
        grabCursor
        loop
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.params.navigation.prevEl = navigationPrevRef.current;
        }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide className={styles.slide}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimpleSwiper;
