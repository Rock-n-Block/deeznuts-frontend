import React from 'react';
import ReactDOM from 'react-dom';

import s from './Modal.module.scss';

import cross from '../../../../assets/img/icons/cross.svg';

interface IModalWrapperProps {
  isActive: boolean;
  close: () => void;
}

const ModalWrapper: React.FC<IModalWrapperProps> = ({ children, isActive, close }) => {
  const el = React.useMemo(() => document.createElement('div'), []);

  React.useEffect(() => {
    const target = document.body;
    const classList = 'portal-container';
    el.classList.add(classList);
    target.appendChild(el);

    return () => {
      target.removeChild(el);
    };
  }, [el]);

  if (!isActive) {
    if (document.body.querySelector('portal-container')) document.body.removeChild(el);
    return <></>;
  }

  return ReactDOM.createPortal(
    <>
      <section className={s.modal}>
        <div className={`${s.modal_inner} grey-scroll`}>
          <button type="button" onClick={() => close()} className={s.cross}>
            <img src={cross} alt="cross" />
          </button>
          {children}
        </div>
      </section>
    </>,
    el,
  );
};

export default ModalWrapper;
