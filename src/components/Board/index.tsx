import styles from '@/components/Board/Board.module.scss';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { useStoreDispatch } from '@/store';
import { openModal } from '@/store/cards';
import { useGetCardsQuery } from '@/store/cards/cards.endpoints';
import { selectUserEmail } from '@/store/cards/cards.selectors';
import { FC } from 'react';
import { useSelector } from 'react-redux';

const Board: FC = () => {
  const dispatch = useStoreDispatch();
  const userEmail = useSelector(selectUserEmail);
  const { data: cards } = useGetCardsQuery(userEmail.replace(/"/g, ''));

  const openAdd = () => {
    dispatch(openModal());
  };
  const userCards = () => {
    if (cards?.length) {
      return cards.map((card) => {
        return (
          <Card key={card.id} id={card.id} description={card.description} title={card.title} />
        );
      });
    }
    return <p>No cards</p>;
  };

  return (
    <div className={styles.board}>
      <Button onClick={openAdd} style='button-board' type='button-yellow'>
        Create card
      </Button>
      <div className={styles.cards}>{userCards()}</div>
    </div>
  );
};

export default Board;
