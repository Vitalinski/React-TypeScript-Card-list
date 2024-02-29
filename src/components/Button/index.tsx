import { FC } from 'react';
import styles from '@/components/Button/index.module.scss';
import { ButtonProps } from '@/store/interfaces';

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${styles[props.class]} ${styles[props.style]}`}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;
