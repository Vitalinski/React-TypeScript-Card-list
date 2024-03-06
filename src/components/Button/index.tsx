import styles from '@/components/Button/Button.module.scss';
import { selectIsWaiting } from '@/store/cards/cards.selectors';
import { ButtonProps } from '@/store/cards/cards.types';
import classNames from 'classnames';
import { FC } from 'react';
import { useSelector } from 'react-redux';

const Button: FC<ButtonProps> = ({ onClick, style, type, children, disabled }) => {
  const isWaiting = useSelector(selectIsWaiting);
  const buttonClass = classNames(styles.button, styles[type], styles[style]);
  return (
    <button onClick={onClick} className={buttonClass} disabled={isWaiting || disabled}>
      {children}
    </button>
  );
};

export default Button;
