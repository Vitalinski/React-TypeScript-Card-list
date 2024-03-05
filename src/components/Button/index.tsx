import { FC } from 'react';
import styles from '@/components/Button/Button.module.scss';
import { ButtonProps } from '@/store/cards/cards.types';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { selectIsWaiting } from '@/store/cards/cards.selectors';

const Button: FC<ButtonProps> = ({onClick,style,type,children,disabled}) => {
  const isWaiting = useSelector(selectIsWaiting);
  const buttonClass = classNames(
    styles.button,
    styles[type],
    styles[style]
  );
  return (
    <button
      onClick={onClick}
      className={buttonClass}
      disabled={isWaiting || disabled}
    >
      {children}
    </button>
  );
};

export default Button;
