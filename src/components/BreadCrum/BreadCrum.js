import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './BreadCrum.module.scss';
import config from '../../config/index';

const cx = classNames.bind(styles);

function BreadCrum({ children }) {
   return (
      <div className={cx('wrapper')}>
         <Link to={config.routes.home} className={cx('nav-link')}>
            TRANG CHỦ
         </Link>
         <span className={cx('split-breadcrum')}>/</span>
         <span className={cx('typography')}>{children}</span>
      </div>
   );
}

export default BreadCrum;
