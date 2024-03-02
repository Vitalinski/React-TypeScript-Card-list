import { FC } from 'react';
import styles from '@/components/modal/Input/input.module.scss';
import { InputProps } from '@/store/cards/cards.types';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import classNames from 'classnames';

const Input: FC<InputProps> = (props) => {
  const isWaiting = useSelector((state: RootState) => state.cardAction.waitingMode);
  const textClass = classNames(
    styles.text,
    { [styles['text-invalid']]: !props.isValid }      )
    const inputClass = classNames(
      styles.input,
      { [styles['input-invalid']]: !props.isValid }      )
      
  return (
    <div>
      <p className={textClass}>
        {props.title}
      </p>
      <input
        disabled={isWaiting}
        type='text'
        value={props.value}
        onChange={props.onChange}
        className={inputClass}
      />
    </div>
  );
};

export default Input;
