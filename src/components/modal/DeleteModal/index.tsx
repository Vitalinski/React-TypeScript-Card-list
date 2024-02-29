import Button from '@/components/Button';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useStoreDispatch } from '@/store/store';
import { changeNotification, clearNotification, deleteCard, closeDelete } from '@/store/cardsSlice';
import Container from '@/components/modal/Container';
import styles from '@/components/modal/DeleteModal/index.module.scss';
const DeleteModal: FC = () => {
  const dispatch = useStoreDispatch();
  const isDeleteOpen = useSelector((state: RootState) => state.cardAction.isDeleteOpen);

  const title = useSelector((state: RootState) => state.cardAction.currentCard.title);

  useEffect(() => {
    if (isDeleteOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isDeleteOpen]);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isDeleteOpen) {
      cleaneAndClose();
    }
  });

  function cleaneAndClose() {
    dispatch(closeDelete());
  }
  function toDelete() {
    dispatch(deleteCard());
    cleaneAndClose();
    dispatch(changeNotification('Card has been delited'));
    setTimeout(() => {
      dispatch(clearNotification());
    }, 1000);
  }
  return (
    <>
      {isDeleteOpen ? (
        <div className={styles.modal} onClick={cleaneAndClose}>
          <Container closeBtn={true} title=' DELETE CARD' onClick={cleaneAndClose}>
            <p className={styles.info}>Are you sure you want to delete card “{title}”?</p>
            <div className={styles.btns}>
              <Button
                disabled={false}
                onClick={cleaneAndClose}
                class='white'
                text='Close'
                style='modalBtn'
              />
              <Button
                disabled={false}
                onClick={toDelete}
                class='yellow'
                text='Delete'
                style='modalBtn'
              />
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
};

export default DeleteModal;
