import React from 'react';
import s from './Button.module.scss';

interface IButton {
  title: string;
  href?: string;
  onClick?: () => void;
  transparent?: boolean;
}

const Button: React.FC<IButton> = ({ title, href, onClick, transparent }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${s.button} ${transparent && s.transparent}`}
      >
        {title}
      </a>
    );
  }
  return (
    <button
      type="button"
      onClick={() => onClick && onClick()}
      className={`${s.button} ${transparent && s.transparent}`}
    >
      {title}
    </button>
  );
};

export default Button;
