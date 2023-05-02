import BreadCrum from '../../components/BreadCrum/BreadCrum';
import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import Sidebar from '../../layouts/components/Sidebar/Sidebar';
import ProductCard from '../../layouts/components/ProductCard/ProductCard';

const cx = classNames.bind(styles);

function Shop() {
   return (
      <div className={cx('wrapper')}>
         {/* Bread crum */}
         <BreadCrum>CỬA HÀNG</BreadCrum>

         {/* Product and Sidebar */}
         <div className={cx('container')}>
            {/* Sidebar */}
            <Sidebar />

            {/* Product */}
            <div className={cx('shop')}>
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
            </div>
         </div>
      </div>
   );
}

export default Shop;
