import Button from '../Button';
import { Link } from 'react-router-dom';
import {  useStoreDispatch} from '../store/store';
import { toClearState } from '../store/cardsSlice';
const Header = () => {
    const buttonStyles = {
        borderRadius: '15px',
        width: '202px',
        height: '61px',
      };
      const userEmail:string = localStorage.getItem('userEmail')||''
const dispatch = useStoreDispatch()

  return (
<header className='header'>
      <p className="header-email">{userEmail.replace(/"/g, '')}</p>
   <Link to="/">
      <Button 
      disabled={false}
      onClick={()=>dispatch(toClearState())}
      text='Log out'
      style = {buttonStyles}
      class="yellow"
      />
   </Link>
    </header>  )
}

export default Header