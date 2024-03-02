import { FC } from 'react';
import styles from '@/components/modal/Container/index.module.scss';
import { ContainerProps } from '@/store/interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Container: FC<ContainerProps> = (props) => {
  const isWaiting = useSelector((state: RootState) => state.cardAction.waitingMode);

  return (
    <div className={styles.content} onClick={(e) => e.stopPropagation()}>
      {props.closeBtn && (
        <button className={styles['content-btn']} disabled={isWaiting} onClick={props.onClick}></button>
      )}
      <h2 className={styles['content-title']}>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default Container;
