import { FC } from 'react';
import styles from '@/components/Container/Container.module.scss';
import { ContainerProps } from '@/store/cards/cards.types';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Container: FC<ContainerProps> = ({closeBtn,title,children,onClick}) => {
  const isWaiting = useSelector((state: RootState) => state.cardAction.waitingMode);

  return (
    <div className={styles.content} onClick={(e) => e.stopPropagation()}>
      {closeBtn && (
        <button
          className={styles['content-btn']}
          disabled={isWaiting}
          onClick={onClick}
        ></button>
      )}
      <h2 className={styles['content-title']}>{title}</h2>
      {children}
    </div>
  );
};

export default Container;
