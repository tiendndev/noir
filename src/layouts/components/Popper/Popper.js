import Tippy from '@tippyjs/react';

import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import PopperItem from '../PopperItem/PopperItem';

const cx = classNames.bind(styles);

function Popper({ children, items }) {
   let menuItem = [];
   if (items) {
      menuItem = items;
   }
   return (
      <div className={cx('popper-wrapper')}>
         <Tippy
            interactive
            animation={false}
            placement="bottom"
            render={(attrs) => (
               <div className={cx('menu')} tabIndex="-1" {...attrs}>
                  {menuItem.map((item, index) => {
                     return <PopperItem key={index}>{item}</PopperItem>;
                  })}
               </div>
            )}
         >
            {children}
         </Tippy>
      </div>
   );
}

export default Popper;
