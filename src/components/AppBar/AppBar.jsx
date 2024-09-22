import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import style from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.flex}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </div>
    </header>
  );
};

export default AppBar