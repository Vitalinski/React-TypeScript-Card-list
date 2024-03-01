import { FC } from 'react';
import styles from '@/components/Button/index.module.scss';
import { ButtonProps } from '@/store/interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Button: FC<ButtonProps> = (props) => {
  const isWaiting = useSelector((state: RootState) => state.cardAction.waitingMode);

  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${styles[props.class]} ${styles[props.style]}`}
      disabled={isWaiting}
    >
      {props.text}
    </button>
  );
};

export default Button;
