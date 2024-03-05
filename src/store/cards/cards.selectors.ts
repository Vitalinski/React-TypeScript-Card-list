import { RootState } from '@/store';

export const selectCurrentCardId = (state: RootState) => state.cardAction.currentCard.id;
export const selectCurrentCardTitle = (state: RootState) => state.cardAction.currentCard.title;
export const selectIsDeleteOpen = (state: RootState) => state.cardAction.isDeleteOpen;
export const selectIsWaiting = (state: RootState) => state.cardAction.waitingMode;
export const selectIsModalOpen = (state: RootState) => state.cardAction.isModalOpen;
export const selectCurrentCard = (state: RootState) => state.cardAction.currentCard;
export const selectNotification = (state: RootState) => state.cardAction.notification;
