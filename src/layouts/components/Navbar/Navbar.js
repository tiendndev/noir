import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import config from '../../../config/index';
import Popper from '../Popper/Popper';

const cx = classNames.bind(styles);

function Navbar() {
   return (
      <div className={cx('wrapper')}>
         <Link to={config.routes.home} className={cx('nav-link')}>
            TRANG CHỦ
         </Link>
         <Popper items={['Áo thun', 'Quần', 'Sơ mi']}>
            <Link to={config.routes.shop} className={cx('nav-link')}>
               CỬA HÀNG
               <FontAwesomeIcon icon={faCaretDown} className={cx('nav-icon')} />
            </Link>
         </Popper>
         <Link to={config.routes.posts} className={cx('nav-link')}>
            BÀI VIẾT
         </Link>
         <Link to={config.routes.connection} className={cx('nav-link')}>
            LIÊN HỆ
         </Link>
      </div>
   );
}

export default Navbar;
