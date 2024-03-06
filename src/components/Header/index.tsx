import Button from '@/components/Button';
import styles from '@/components/Header/Header.module.scss';
import { useStoreDispatch } from '@/store';
import { toClearState } from '@/store/cards';
import { ROUTES } from '@/store/cards/cards.constants';
import { selectUserEmail } from '@/store/cards/cards.selectors';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useStoreDispatch();

  return (
    <header className={styles.header}>
      <p>{userEmail.replace(/"/g, '')}</p>
      <Link to={ROUTES.LOGIN}>
        <Button onClick={() => dispatch(toClearState())} style='button-header' type='button-yellow'>
          Log out
        </Button>
      </Link>
    </header>
  );
};

export default Header;
