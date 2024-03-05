import Button from '@/components/Button';
import Card from '@/components/Card';
import { useStoreDispatch } from '@/store';
import { openModal } from '@/store/cards';
import styles from '@/components/Board/Board.module.scss';
import { FC } from 'react';
import { useGetCardsQuery } from '@/store/cards/cards.apiCalls';

const Board: FC = () => {
  const dispatch = useStoreDispatch();
  const userEmail: string = localStorage.getItem('userEmail') || '';
  const { data: cards } = useGetCardsQuery(userEmail.replace(/"/g, ''));

  const openAdd = () => {
    dispatch(openModal());
  };

  return (
    <div className={styles.board}>
      <Button onClick={openAdd} style='button-board' type='button-yellow' >
        Create card
      </Button>
      <div className={styles.cards}>
        {cards?.length
          ? cards.map((card) => {
              return (
                <Card
                  key={card.id}
                  id={card.id}
                  description={card.description}
                  title={card.title}
                />
              );
            })
          : 'No cards'}
      </div>
    </div>
  );
};

export default Board;
