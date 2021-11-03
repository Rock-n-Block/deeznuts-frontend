import React from 'react';
import s from './Button.module.scss';
import cn from 'classnames';

interface IButton {
  title: string;
  href?: string;
  onClick?: () => void;
  transparent?: boolean;
  className?: string;
  insideShadow?: boolean
}

const Button: React.FC<IButton> = ({ title, href, onClick, transparent, className, insideShadow }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cn(s.button, { [s.transparent]: transparent },{ [s.insideShadow]: insideShadow }, className)}
      >
        {title}
      </a>
    );
  }
  return (
    <button
      type="button"
      onClick={() => onClick && onClick()}
      className={cn(s.button, { [s.transparent]: transparent },{ [s.insideShadow]: insideShadow }, className)}
    >
      {title}
    </button>
  );
};

export default Button;
