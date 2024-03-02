import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useStoreDispatch } from '@/store/store';
import { toClearState } from '@/store/cards';
import styles from '@/components/Header/header.module.scss';
import { ROUTES } from '@/store/routes';
import { FC } from 'react';
const Header: FC = () => {
  const userEmail: string = localStorage.getItem('userEmail') || '';
  const dispatch = useStoreDispatch();

  return (
    <header className={styles.header}>
      <p>{userEmail.replace(/"/g, '')}</p>
      <Link to={ROUTES.LOGIN}>
        <Button
          onClick={() => dispatch(toClearState())}
          text='Log out'
          style='button-header'
          class='button-yellow'
        />
      </Link>
    </header>
  );
};

export default Header;
