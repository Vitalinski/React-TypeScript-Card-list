import { FC } from 'react';
import styles from '@/components/Button/button.module.scss';
import { ButtonProps } from '@/store/cards/cards.types';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import classNames from 'classnames';

const Button: FC<ButtonProps> = (props) => {
  const isWaiting = useSelector((state: RootState) => state.cardAction.waitingMode);
  const buttonClass = classNames(
    styles.button,
    styles[props.class],
    styles[props.style]
  );
  return (
    <button
      onClick={props.onClick}
      className={buttonClass}
      disabled={isWaiting || props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;
