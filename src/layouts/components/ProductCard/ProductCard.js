import classNames from 'classnames/bind';
import styles from './ProductCard.module.scss';
import Button from '../../../components/Button/Button';

const cx = classNames.bind(styles);

function ProductCard() {
   return (
      <div className={cx('wrapper')}>
         {/* Product Image */}
         <div className={cx('image')}>
            <img
               src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/337900028_183113604506247_2896132624833053050_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=6_AygDT0FDsAX-KaF19&_nc_ht=scontent.fdad1-3.fna&oh=00_AfB5zHAZoqb8pM93_DQKwA4yoZDV7RF3aH66-pVkvQVgvQ&oe=645541E3"
               alt="product"
            />
            <span className={cx('price-tag')}>-17%</span>
            <p className={cx('quick-view')}>QUICK VIEW</p>
         </div>

         <div className={cx('card-body')}>
            {/* Category */}
            <p className={cx('category')}>ÁO THUN</p>

            {/* Name */}
            <p className={cx('name')}>Cà phê sữa đá Tee</p>

            {/* Price */}
            <div className={cx('prices')}>
               <span className={cx('original-price')}>299.000đ</span>
               <span className={cx('discount-price')}>249.000đ</span>
            </div>

            {/* Button */}
            <div className={cx('add-to-cart-btn')}>
               <Button outline>Thêm vào giỏ hàng</Button>
            </div>
         </div>
      </div>
   );
}

export default ProductCard;
