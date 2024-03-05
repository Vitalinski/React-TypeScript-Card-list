import { FC } from 'react';
import styles from '@/components/Button/button.module.scss';
import { ButtonProps } from '@/store/cards/cards.types';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import classNames from 'classnames';

const Button: FC<ButtonProps> = ({onClick,style,type,children,disabled}) => {
  const isWaiting = useSelector((state: RootState) => state.cardAction.waitingMode);
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
