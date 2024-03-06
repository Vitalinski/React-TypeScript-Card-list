import Button from '@/components/Button';
import styles from '@/components/Card/Card.module.scss';
import { useStoreDispatch } from '@/store';
import { changeCurrentCard, openDelete, openModal } from '@/store/cards';
import { CardProps } from '@/store/cards/cards.types';
import { FC, memo } from 'react';

const CardComponent: FC<CardProps> = ({ description, id, title }) => {
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
        <Button onClick={editOpen} type='button-yellow' style='button-card'>
          Edit
        </Button>
        <Button onClick={deleteOpen} type='button-yellow' style='button-card'>
          Delete
        </Button>
      </div>
    </div>
  );
};
const Card = memo(CardComponent);

export default Card;
