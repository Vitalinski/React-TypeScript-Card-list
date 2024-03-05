import { FC } from 'react';
import styles from '@/components/modal/Input/input.module.scss';
import { InputProps } from '@/store/cards/cards.types';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import classNames from 'classnames';

const Input: FC<InputProps> = ({isValid,onChange,title,type,value}) => {
  const isWaiting = useSelector((state: RootState) => state.cardAction.waitingMode);
  const textClass = classNames(
    styles.text,
    { [styles['text-invalid']]: !isValid }      )
    const inputClass = classNames(
      styles.input,
      { [styles['input-invalid']]: !isValid }      )
      
  return (
    <div>
      <p className={textClass}>
        {title}
      </p>
      <input
        disabled={isWaiting}
        type={type}
        value={value}
        onChange={onChange}
        className={inputClass}
      />
    </div>
  );
};

export default Input;
