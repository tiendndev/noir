import classNames from 'classnames/bind';
import styles from './PopperItem.module.scss';

const cx = classNames.bind(styles);

function PopperItem({ children }) {
   return <div className={cx('menu-item')}>{children}</div>;
}

export default PopperItem;
