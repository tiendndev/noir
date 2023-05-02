import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem() {
   return (
      <div className={cx('product')}>
         <img
            className={cx('search-image')}
            src="https://down-vn.img.susercontent.com/file/2a25bc06fb7691bcc4283bdfb3c4f9c8"
            alt="product"
         />
         <p className={cx('search-name')}>Comfy Sweat Short</p>
         <span className={cx('search-price')}>349.000đ</span>
      </div>
   );
}

export default ProductItem;
