import Button from '@/components/Button';
import Card from '@/components/board//Card';
import { useSelector } from 'react-redux';
import { RootState, useStoreDispatch } from '@/store/store';
import { openModal } from '@/store/cardsSlice';
import styles from '@/components/board/Board/index.module.scss';
import { FC } from 'react';
const Board: FC = () => {
  const dispatch = useStoreDispatch();
  const cards = useSelector((state: RootState) => state.cardAction.initialCards);

  function openAdd() {
    dispatch(openModal());
  }

  return (
    <div className={styles.board}>
      <Button
        disabled={false}
        onClick={openAdd}
        text='Create card'
        style='boardBtn'
        class='yellow'
      />
      <div className={styles.cards}>
        {cards.map((card) => {
          return (
            <Card key={card.id} id={card.id} description={card.description} title={card.title} />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
