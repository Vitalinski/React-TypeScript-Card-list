import styles from '@/components/Overlay/Overlay.module.scss';
import { selectIsDeleteOpen, selectIsModalOpen } from '@/store/cards/cards.selectors';
import { OverlayProps } from '@/store/cards/cards.types';
import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Overlay: FC<OverlayProps> = ({ onClick, children }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const isDeleteOpen = useSelector(selectIsDeleteOpen);
  const closeOverlay = useCallback(() => {
    onClick();
  }, [onClick]);

  useEffect(() => {
    const handleClose = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && (isDeleteOpen || isModalOpen)) {
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
