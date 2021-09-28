import React, { useEffect, useState } from 'react';

import s from './Selector.module.scss';

import arrow from '../../../assets/img/icons/arrow.svg';

interface ISelectorProps {
  initValue: number | string;
  values: Array<number | string>;
  onChange: (val: number | string) => void;
}

const Selector: React.FC<ISelectorProps> = ({ initValue, values, onChange }) => {
  const [value, setValue] = useState(initValue);
  const [isOpened, setIsOpened] = useState(false);
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
      className={`${s.selector} ${isOpened && s.active}`}
      onClick={() => {
        const selector = document.querySelector(`.${s.selector_others}`);
        if (selector) {
          if (
            document.documentElement.clientHeight -
              selector.getBoundingClientRect().bottom -
              selector.clientHeight +
              selector.clientHeight / 8 <
            0
          ) {
            if (!selector.classList.contains(s.active)) {
              setIsTop(true);
            }
          } else setIsTop(false);
        }
      }}
    >
      <button type="button" onClick={() => setIsOpened(!isOpened)} className={s.selector_current}>
        <span>{value}</span>
        <img src={arrow} alt="arrow" />
      </button>
      <div className={`${s.selector_others} ${isOpened && s.active} ${isTop && s.top}`}>
        {values.map((val) => (
          <button
            key={val}
            type="button"
            className={s.selector_value}
            onClick={() => {
              setValue(val);
              setIsOpened(false);
            }}
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Selector;
