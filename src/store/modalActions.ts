import { RootState } from './interfaces';

const ChangeNotification = (state: RootState, info: { payload: string }) => {
  state.notification = info.payload;
};
const ClearNotification = (state: RootState) => {
  state.notification = '';
};
const OpenModal = (state: RootState) => {
  state.isModalOpen = true;
};
const CloseModal = (state: RootState) => {
  state.isModalOpen = false;
  state.currentCard = {};
};
const OpenDelete = (state: RootState) => {
  state.isDeleteOpen = true;
};
const CloseDelete = (state: RootState) => {
  state.isDeleteOpen = false;
  state.currentCard = {};
};

export { ChangeNotification, ClearNotification, CloseDelete, CloseModal, OpenDelete, OpenModal };
