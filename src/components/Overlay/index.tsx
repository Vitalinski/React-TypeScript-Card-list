import { useEffect, FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import styles from '@/components/Overlay/Overlay.module.scss';
import { OverlayProps } from '@/store/cards/cards.types';
const Overlay: FC<OverlayProps> = ({onClick,children}) => {
  const isModalOpen = useSelector((state: RootState) => state.cardAction.isModalOpen);
  const isDeleteOpen = useSelector((state: RootState) => state.cardAction.isDeleteOpen);
  const closeOverlay = useCallback(() => {
    onClick();
  }, [onClick]);

  useEffect(() => {
    const handleClose = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && (isDeleteOpen||isModalOpen )) {
        closeOverlay();
      }
    };
    document.addEventListener('keydown', handleClose);

    return () => {
      document.removeEventListener('keydown', handleClose);
    };
  }, [isModalOpen, isDeleteOpen, closeOverlay]);

  return (
    <div className={styles.overlay} onClick={closeOverlay}>
      {children}
    </div>
  );
};

export default Overlay;
