import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import config from '../../../config';
import images from '../../../assets/images';
import Search from '../Search/Search';
import UserAndCart from '../UserAndCart/UserAndCart';

const cx = classNames.bind(styles);

function Header() {
   return (
      <header className={cx('header-wrapper')}>
         {/* Logo */}
         <Link to={config.routes.home}>
            <img src={images.logo} alt="Logo" />
         </Link>

         {/* Search */}
         <Search />

         {/* User and Cart */}
         <UserAndCart />
      </header>
   );
}

export default Header;
