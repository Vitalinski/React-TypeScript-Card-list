import { FC } from 'react';
import styles from '@/components/modal/Container/index.module.scss';
import { ContainerProps } from '@/store/interfaces';

const Container: FC<ContainerProps> = (props) => {
  return (
    <div className={styles.content} onClick={(e) => e.stopPropagation()}>
      {props.closeBtn && <div className={styles.btn} onClick={props.onClick}></div>}
      <h2 className={styles.title}>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default Container;
