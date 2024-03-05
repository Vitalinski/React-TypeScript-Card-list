import { FC, memo } from 'react';
import Button from '@/components/Button';
import { useStoreDispatch } from '@/store';
import { openDelete, openModal, changeCurrentCard } from '@/store/cards';
import styles from '@/components/board/Card/card.module.scss';
import { CardProps } from '@/store/cards/cards.types';

const CardComponent: FC<CardProps> = ({description,id,title}) => {
  const dispatch = useStoreDispatch();

  const deleteOpen = () => {
    dispatch(changeCurrentCard({ id: id, title: title }));
    dispatch(openDelete());
  };
  const editOpen = () => {
    dispatch(
      changeCurrentCard({
        id: id,
        title: title,
        description: description,
      }),
    );
    dispatch(openModal());
  };
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.footer}>
        <Button onClick={editOpen} type='button-yellow'  style='button-card' >Edit</Button>
        <Button onClick={deleteOpen} type='button-yellow' style='button-card' >Delete</Button>
      </div>
    </div>
  );
};
const Card = memo(CardComponent);

export default Card;
