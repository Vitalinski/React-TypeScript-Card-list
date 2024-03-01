import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useStoreDispatch } from '@/store/store';
import { toClearState } from '@/store/cardsSlice';
import styles from '@/components/Header/index.module.scss';
import { ROUTES } from '@/store/routes';
import { FC } from 'react';
const Header: FC = () => {
  const userEmail: string = localStorage.getItem('userEmail') || '';
  const dispatch = useStoreDispatch();

  return (
    <header className={styles.header}>
      <p className={styles.email}>{userEmail.replace(/"/g, '')}</p>
      <Link to={ROUTES.LOGIN}>
        <Button
          onClick={() => dispatch(toClearState())}
          text='Log out'
          style='headerBtn'
          class='yellow'
        />
      </Link>
    </header>
  );
};

export default Header;
