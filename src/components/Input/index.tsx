import styles from '@/components/Input/Input.module.scss';
import { selectIsWaiting } from '@/store/cards/cards.selectors';
import { InputProps } from '@/store/cards/cards.types';
import classNames from 'classnames';
import { FC } from 'react';
import { useSelector } from 'react-redux';

const Input: FC<InputProps> = ({ isValid, onChange, title, type, value }) => {
  const isWaiting = useSelector(selectIsWaiting);
  const textClass = classNames(styles.text, { [styles['text-invalid']]: !isValid });
  const inputClass = classNames(styles.input, { [styles['input-invalid']]: !isValid });

  return (
    <div>
      <p className={textClass}>{title}</p>
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
