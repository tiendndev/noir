import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';

const cx = classNames.bind(styles);

function Search() {
   const [searchResult, setSearchResult] = useState([]);

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([1, 2]);
      }, 0);
   }, []);

   return (
      <Tippy
         interactive
         placement="bottom"
         visible={searchResult.length > 0 ? true : false}
         render={(attrs) => (
            <div className={cx('search-results')} tabIndex="-1" {...attrs}>
               <ProductItem />
               <ProductItem />
               <ProductItem />
               <ProductItem />
               <ProductItem />
               <ProductItem />
            </div>
         )}
      >
         <div className={cx('search-wrapper')}>
            <input placeholder="Tìm kiếm sản phẩm..."></input>
            <button className={cx('search-btn')}>
               <FontAwesomeIcon icon={faSearch} />
            </button>
         </div>
      </Tippy>
   );
}

export default Search;
