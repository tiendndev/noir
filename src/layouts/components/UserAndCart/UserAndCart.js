import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faBagShopping,
   faCircleXmark,
   faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import classNames from 'classnames/bind';
import styles from './UserAndCart.module.scss';
import Button from '../../../components/Button/Button';
import Popper from '../Popper/Popper';

const cx = classNames.bind(styles);

function UserAndCart() {
   let currentUser = true;
   const [price, setPrice] = useState(0);
   const [product, setProduct] = useState([]);

   let cart = {
      // product: [1, 2],
      // price: Number(100).toFixed(3),
   };
   useEffect(() => {
      setTimeout(() => {
         setProduct(cart.product ? cart.product : []);
         setPrice(cart.price ? cart.price : 0);
      }, 0);
   }, [cart.product, cart.price]);

   return (
      <div className={cx('user-and-cart')}>
         {/* User */}
         <Popper
            items={[
               'TRANG TÀI KHOẢN',
               'ĐƠN HÀNG',
               'ĐỊA CHỈ',
               'WISHLIST',
               'THOÁT',
            ]}
         >
            <div className={cx('user')}>
               <span className={cx('username')}>Admin</span>
               <FontAwesomeIcon icon={faUser} />
            </div>
         </Popper>

         {/* Devider */}
         <div className={cx('devider')}></div>

         {/* Cart */}
         {currentUser && (
            <div className={cx('cart-card')}>
               <Tippy
                  interactive
                  animation={false}
                  placement="bottom"
                  // visible={true}
                  render={(attrs) => (
                     <div
                        className={cx('card-wrapper')}
                        tabIndex="-1"
                        {...attrs}
                     >
                        {product.length > 0 ? (
                           <div>
                              {/* Product info */}
                              <div className={cx('product')}>
                                 <img
                                    src="https://down-vn.img.susercontent.com/file/2a25bc06fb7691bcc4283bdfb3c4f9c8"
                                    alt="product"
                                 />

                                 <div className={cx('info')}>
                                    <p className={cx('product-name')}>
                                       Label Pole Tee
                                    </p>
                                    <div className={cx('quantity-and-price')}>
                                       <span className={cx('quantity')}>
                                          1 x{' '}
                                       </span>
                                       <span className={cx('price')}>
                                          {price}đ
                                       </span>
                                    </div>
                                 </div>

                                 <FontAwesomeIcon
                                    className={cx('close-btn')}
                                    icon={faCircleXmark}
                                 />
                              </div>
                              {/* Total price */}
                              <div className={cx('total-price')}>
                                 Tổng số phụ:
                                 <span className={cx('price')}> {price}</span>
                              </div>

                              {/* Watch Cart button */}
                              <Button secondary>XEM GIỎ HÀNG</Button>

                              {/* Pay button */}
                              <Button primary>THANH TOÁN</Button>
                           </div>
                        ) : (
                           'Chưa có sản phẩm trong giỏ hàng.'
                        )}
                     </div>
                  )}
               >
                  <div className={cx('cart')}>
                     <span className={cx('cart-price')}>
                        GIỎ HÀNG / {price}đ
                     </span>
                     <FontAwesomeIcon
                        icon={faBagShopping}
                        className={cx('cart-icon')}
                     />
                  </div>
               </Tippy>
            </div>
         )}
      </div>
   );
}

export default UserAndCart;
