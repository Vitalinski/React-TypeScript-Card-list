import { FC } from 'react';
import styles from '@/components/modal/Input/index.module.scss';
import { InputProps } from '@/store/interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Input: FC<InputProps> = (props) => {
  const isWaiting = useSelector((state: RootState) => state.cardAction.waitingMode);

  return (
    <div>
      <p className={`${styles.text} ${props.isValid ? '' : styles.invalidText}`}>{props.title}</p>
      <input
        disabled={isWaiting}
        type='text'
        value={props.value}
        onChange={props.onChange}
        className={`${styles.input} ${props.isValid ? '' : styles.invalidInput}`}
      />
    </div>
  );
};

export default Input;
