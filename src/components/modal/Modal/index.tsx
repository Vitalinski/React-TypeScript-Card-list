import Button from '@/components/Button';
import { useState, useEffect, FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useStoreDispatch } from '@/store/store';
import {
  clearNotification,
  closeModal,
  changeNotification,
  changeWaitingMode,
} from '@/store/cardsSlice';
import Container from '@/components/modal/Container';
import Input from '@/components/modal/Input';
import styles from '@/components/modal/Modal/index.module.scss';
import { useAddCardMutation, useChangeCardMutation } from '@/store/apiSlice';
const Modal: FC = () => {
  const isWaiting = useSelector((state: RootState) => state.cardAction.waitingMode);

  const [addCard] = useAddCardMutation();
  const [changeCard] = useChangeCardMutation();
  const userEmail: string = localStorage.getItem('userEmail') || '';
  const dispatch = useStoreDispatch();
  const isModalOpen = useSelector((state: RootState) => state.cardAction.isModalOpen);
  const currentCard = useSelector((state: RootState) => state.cardAction.currentCard);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(currentCard.description || '');
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const isEdit = !!currentCard.title;
  useEffect(() => {
    setTitle(currentCard.title !== undefined ? currentCard.title : '');
    setDescription(currentCard.description !== undefined ? currentCard.description : '');
  }, [currentCard]);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isModalOpen) {
      cleaneAndClose();
    }
  });

  const addNewCard = async () => {
    const newCard = {
      author: userEmail.replace(/"/g, ''),
      id: Math.random(),
      title: title,
      description: description,
    };

    dispatch(changeWaitingMode(true));
    try {
      await addCard(newCard).unwrap();
      dispatch(changeWaitingMode(false));
      dispatch(changeNotification('Card has been created'));
    } catch (error) {
      dispatch(changeWaitingMode(false));
      dispatch(changeNotification('Something went wrong'));
    }
    cleaneAndClose();
    setTimeout(() => {
      dispatch(clearNotification());
    }, 1000);
  };
  const editCard = async () => {
    const card = {
      id: currentCard.id,
      title: title,
      description: description,
    };

    dispatch(changeWaitingMode(true));

    try {
      await changeCard(card).unwrap();
      dispatch(changeWaitingMode(false));
      dispatch(changeNotification('Card has been edited'));
    } catch (error) {
      dispatch(changeWaitingMode(false));
      dispatch(changeNotification('Something went wrong'));
    }

    cleaneAndClose();
    setTimeout(() => {
      dispatch(clearNotification());
    }, 1000);
  };
  function validation() {
    if (title.length === 0) {
      setIsTitleValid(false);
    } else if (description.length === 0) {
      setIsDescriptionValid(false);
    } else isEdit ? editCard() : addNewCard();
  }
  function cleaneAndClose() {
    if (isWaiting) return;
    dispatch(closeModal());
    setIsDescriptionValid(true);
    setIsTitleValid(true);
    setDescription('');
    setTitle('');
  }

  const modalTitle = isEdit ? 'EDIT CARD' : ' CREATE CARD';
  const modalSubmitText = isEdit ? 'Save' : ' Create';

  return (
    <>
      {isModalOpen ? (
        <div className={styles.modal} onClick={cleaneAndClose}>
          <Container closeBtn={true} title={modalTitle} onClick={cleaneAndClose}>
            <Input
              isValid={isTitleValid}
              type='text'
              title='Title'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value.trim());
                setIsTitleValid(true);
              }}
            />
            <Input
              isValid={isDescriptionValid}
              type='text'
              title='Description'
              value={description}
              onChange={(e) => {
                setDescription(e.target.value.trim());
                setIsDescriptionValid(true);
              }}
            />

            <div className={styles.btns}>
              <Button onClick={cleaneAndClose} class='white' text='Close' style='modalBtn' />
              <Button onClick={validation} class='yellow' text={modalSubmitText} style='modalBtn' />
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
