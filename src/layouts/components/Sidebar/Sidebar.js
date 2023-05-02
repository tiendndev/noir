import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Sidebar() {
   const [filterPrice, setFilterPrice] = useState(0);

   const handleChange = (e) => {
      setFilterPrice(e.target.value);
   };
   return (
      <div className={cx('wrapper')}>
         <div className={cx('filter')}>
            <p className={cx('filter-title')}>LỌC THEO GIÁ</p>
            <input
               className={cx('slider')}
               value={filterPrice}
               min={0}
               max={1000000}
               step={20000}
               type="range"
               onChange={handleChange}
            ></input>
            <button className={cx('filter-btn')}>LỌC</button>
            <span className={cx('filter-price')}>
               Giá <span>{filterPrice}</span>đ
            </span>
         </div>
      </div>
   );
}

export default Sidebar;
