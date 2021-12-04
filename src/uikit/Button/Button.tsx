import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.css';

const cx = classNames.bind(styles);

type Props = {
  type?: 'primary' | 'secondary' | 'teritary';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ type, children, onClick, disabled }: Props) => {
  return (
    <button
      className={cx('common', {
        primary: type === 'primary',
        secondary: type === 'secondary',
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
