import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface IButton {
  title: string;
  href?: string;
  onClick?: () => void;
  transparent?: boolean;
  className?: string;
  insideShadow?: boolean;
  image?: string;
}

const Button: React.FC<IButton> = ({
  title,
  href,
  onClick,
  transparent,
  className,
  insideShadow,
  image,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cn(
          s.button,
          { [s.transparent]: transparent },
          { [s.insideShadow]: insideShadow },
          className,
        )}
      >
        {title}
      </a>
    );
  }
  return (
    <button
      type="button"
      onClick={() => onClick && onClick()}
      className={cn(
        s.button,
        { [s.transparent]: transparent },
        { [s.insideShadow]: insideShadow },
        className,
      )}
    >
      {image && <img src={image} alt="img" className={s.image} />}
      {title}
    </button>
  );
};

export default Button;
