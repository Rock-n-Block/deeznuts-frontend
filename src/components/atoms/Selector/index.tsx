import React, { useEffect, useState } from 'react';
import s from './Selector.module.scss';

interface ISelectorProps {
  initValue: number | string;
  values: Array<number | string>;
  onChange: (val: number | string) => void;
}

const Selector: React.FC<ISelectorProps> = ({ initValue, values, onChange }) => {
  const [value, setValue] = useState(initValue);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <div className={s.selector}>
      <button type="button" onClick={() => setIsOpened(!isOpened)} className={s.selector_current}>
        {value}
      </button>
      <div className={`${s.selector_others} ${isOpened && s.active}`}>
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
