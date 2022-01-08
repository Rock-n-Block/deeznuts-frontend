import React, { FC, PropsWithChildren, useCallback, useState } from 'react';
import nextId from 'react-id-generator';
import Slider, { ResponsiveObject } from 'react-slick';
import cx from 'classnames';
import arrowLeft from '../../../assets/img/icons/arrowLeft.svg';

import styles from './styles.module.scss';

type Props = {
  classNameArrowLeft?: string;
  classNameArrowRight?: string;
  classNameProp?: string;
  slidesToShow?: number;
  hideArrows?: boolean;
  responsive?: ResponsiveObject[];
  dots?: boolean;
  classNameSlide?: string;
  classNameSlideActive?: string;
  showArrows?: boolean;
};

const SimpleSlider: FC<PropsWithChildren<Props>> = ({
  classNameProp,
  children,
  // classNameArrowRight,
  slidesToShow = 1,
  // responsive,
  dots = false,
  classNameSlide,
  classNameSlideActive,
  showArrows = false,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function PrevArrow(props: any) {
    const { className, onClick } = props;
    return (
      <button
        type="button"
        className={cx(className, styles.arrow, styles.arrowLeft)}
        onClick={onClick}
      >
        <img src={arrowLeft} alt="" />
      </button>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function NextArrow(props: any) {
    const { className, onClick } = props;
    return (
      <button
        type="button"
        className={cx(className, styles.arrow, styles.arrowRight)}
        onClick={onClick}
      >
        <img src={arrowLeft} alt="" />
      </button>
    );
  }
  const [dragging, setDragging] = useState(false);

  const handleBeforeChange = useCallback(
    (oldI, newI) => {
      setActiveSlideIndex(newI);
      setDragging(true);
    },
    [setDragging],
  );

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const handleOnItemClick = useCallback(
    (e) => {
      if (dragging) {
        e.stopPropagation();
        e.preventDefault();
      }
    },
    [dragging],
  );

  const sliderConfig = {
    dots,
    infinite: React.Children.count(children) > 3,
    speed: 400,
    slidesToShow,
    // slidesToScroll: 1,
    dotsClass: styles.slickDots,
    customPaging: (i: number) => (
      <div className={cx(styles.indicator, { [styles.active]: i === activeSlideIndex })} />
    ),
    prevArrow: showArrows ? <PrevArrow /> : undefined,
    nextArrow: showArrows ? <NextArrow /> : undefined,
    arrows: showArrows,
    centerMode: true,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    // responsive,
  };

  return (
    <Slider className={cx(classNameProp)} {...sliderConfig}>
      {React.Children.map(children, (child, index) => (
        <div
          onClickCapture={handleOnItemClick}
          key={nextId()}
          className={index === activeSlideIndex ? classNameSlideActive : classNameSlide}
        >
          {child}
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
