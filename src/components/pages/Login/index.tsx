import Button from '@/components/Button';
import Container from '@/components/Container';
import Input from '@/components/Input';
import { useStoreDispatch } from '@/store';
import { initialiseUser } from '@/store/cards';
import { ROUTES } from '@/store/cards/cards.constants';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const dispatch = useStoreDispatch();
  const navigate = useNavigate();
  const login = () => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (isValidEmail) {
      dispatch(initialiseUser(email));
      navigate(ROUTES.DASHBOARD);
    }
    setIsValid(isValidEmail);
  };
  return (
    <Container closeBtn={false} title='LOGIN FORM'>
      <Input
        isValid={isValid}
        title='Email'
        type='email'
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value.trim());
          setIsValid(true);
        }}
      />

      <Button
        disabled={email.length === 0}
        type='button-yellow'
        style='button-login'
        onClick={login}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Login;
