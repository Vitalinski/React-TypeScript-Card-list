import Button from '@/components/Button';
import Container from '@/components/Container';
import styles from '@/components/CreateOrUpdateModal/CreateOrUpdateModal.module.scss';
import Input from '@/components/Input';
import Overlay from '@/components/Overlay';
import { useStoreDispatch } from '@/store';
import {
  changeNotification,
  changeWaitingMode,
  clearNotification,
  closeModal,
} from '@/store/cards';
import { NOTIFICATION } from '@/store/cards/cards.constants';
import { useAddCardMutation, useChangeCardMutation } from '@/store/cards/cards.endpoints';
import {
  selectCurrentCard,
  selectIsModalOpen,
  selectUserEmail,
} from '@/store/cards/cards.selectors';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Modal: FC = () => {
  const [addCard, { isLoading: isAddLoading }] = useAddCardMutation();
  const [changeCard, { isLoading: isChangeLoading }] = useChangeCardMutation();
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useStoreDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);
  const currentCard = useSelector(selectCurrentCard);
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
    dispatch(changeWaitingMode(isAddLoading || isChangeLoading));
  }, [isAddLoading, isChangeLoading, dispatch]);
  const addNewCard = async () => {
    const newCard = {
      author: userEmail.replace(/"/g, ''),
      id: Math.random(),
      title: title,
      description: description,
    };

    try {
      await addCard(newCard).unwrap();
      dispatch(changeNotification(NOTIFICATION.SUCCESS.ADD));
    } catch (error) {
      dispatch(changeNotification(NOTIFICATION.ERROR));
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

    try {
      await changeCard(card).unwrap();
      dispatch(changeNotification(NOTIFICATION.SUCCESS.EDIT));
    } catch (error) {
      dispatch(changeNotification(NOTIFICATION.ERROR));
    }

    cleaneAndClose();
    setTimeout(() => {
      dispatch(clearNotification());
    }, 1000);
  };
  const validation = () => {
    if (title.length === 0) {
      setIsTitleValid(false);
    } else if (description.length === 0) {
      setIsDescriptionValid(false);
    } else isEdit ? editCard() : addNewCard();
  };
  const cleaneAndClose = () => {
    if (isAddLoading || isChangeLoading) return;
    dispatch(closeModal());
    setIsDescriptionValid(true);
    setIsTitleValid(true);
    setDescription('');
    setTitle('');
  };

  const modalTitle = isEdit ? 'EDIT CARD' : ' CREATE CARD';
  const modalSubmitText = isEdit ? 'Save' : ' Create';

  if (isModalOpen)
    return (
      <Overlay onClick={cleaneAndClose}>
        <Container closeBtn={true} title={modalTitle} onClick={cleaneAndClose}>
          <Input
            isValid={isTitleValid}
            type='text'
            title='Title'
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value.trim());
              setIsTitleValid(true);
            }}
          />
          <Input
            isValid={isDescriptionValid}
            type='text'
            title='Description'
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(e.target.value.trim());
              setIsDescriptionValid(true);
            }}
          />

          <div className={styles.btns}>
            <Button onClick={cleaneAndClose} type='button-white' style='button-modal'>
              Close
            </Button>
            <Button onClick={validation} type='button-yellow' style='button-modal'>
              {modalSubmitText}
            </Button>
          </div>
        </Container>
      </Overlay>
    );
  return null;
};

export default Modal;
