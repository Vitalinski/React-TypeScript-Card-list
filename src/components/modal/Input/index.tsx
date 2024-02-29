import { FC } from 'react';
import styles from '@/components/modal/Input/index.module.scss';
import { InputProps } from '@/store/interfaces';

const Input: FC<InputProps> = (props) => {
  return (
    <div>
      <p className={`${styles.text} ${props.isValid ? '' : styles.invalidText}`}>{props.title}</p>
      <input
        type='text'
        value={props.value}
        onChange={props.onChange}
        className={`${styles.input} ${props.isValid ? '' : styles.invalidInput}`}
      />
    </div>
  );
};

export default Input;
