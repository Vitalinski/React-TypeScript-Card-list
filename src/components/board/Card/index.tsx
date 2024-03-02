import { FC } from 'react';
import Button from '@/components/Button';
import { useStoreDispatch } from '@/store/store';
import { openDelete, openModal, changeCurrentCard } from '@/store/cardsSlice';
import styles from '@/components/board/Card/card.module.scss';
import { CardProps } from '@/store/interfaces';

const Card: FC<CardProps> = (props) => {
  const dispatch = useStoreDispatch();

  const deleteOpen = () => {
    dispatch(changeCurrentCard({ id: props.id, title: props.title }));
    dispatch(openDelete());
  };
  const editOpen = () => {
    dispatch(
      changeCurrentCard({
        id: props.id,
        title: props.title,
        description: props.description,
      }),
    );
    dispatch(openModal());
  };
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
      </div>
      <div className={styles.footer}>
        <Button onClick={editOpen} class='button-yellow' text='Edit' style='button-card' />
        <Button onClick={deleteOpen} class='button-yellow' text='Delete' style='button-card' />
      </div>
    </div>
  );
};

export default Card;
