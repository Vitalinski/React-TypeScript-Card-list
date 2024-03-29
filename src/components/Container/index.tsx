import styles from '@/components/Container/Container.module.scss';
import { selectIsWaiting } from '@/store/cards/cards.selectors';
import { ContainerProps } from '@/store/cards/cards.types';
import { FC } from 'react';
import { useSelector } from 'react-redux';

const Container: FC<ContainerProps> = ({ closeBtn, title, children, onClick }) => {
  const isWaiting = useSelector(selectIsWaiting);

  return (
    <div className={styles.content} onClick={(e) => e.stopPropagation()}>
      {closeBtn && (
        <button className={styles['content-btn']} disabled={isWaiting} onClick={onClick}></button>
      )}
      <h2 className={styles['content-title']}>{title}</h2>
      {children}
    </div>
  );
};

export default Container;
