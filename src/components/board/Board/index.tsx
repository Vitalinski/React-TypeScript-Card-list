import Button from '@/components/Button';
import Card from '@/components/board//Card';
import { useStoreDispatch } from '@/store/store';
import { openModal } from '@/store/cards';
import styles from '@/components/board/Board/board.module.scss';
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
      <Button onClick={openAdd} text='Create card' style='button-board' class='button-yellow' />
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
