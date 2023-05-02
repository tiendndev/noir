import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
   return (
      <div>
         <Topbar />
         <Header />
         <Navbar />
         <div className={cx('container')}>{children}</div>
         <Footer />
      </div>
   );
}

export default DefaultLayout;
