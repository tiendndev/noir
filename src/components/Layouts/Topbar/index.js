import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './Topbar.module.scss';

const cx = classNames.bind(styles);

function Topbar() {
   return (
      <div className={cx('topbar-wrapper')}>
         <div className={cx('news')}>BLACK FRIDAY GIẢM GIÁ 20%</div>

         <div className={cx('contact')}>
            <Tippy content="09:00 - 22:00">
               <div className={cx('date')}>
                  <FontAwesomeIcon
                     icon={faClock}
                     className={cx('topbar-icon')}
                  />
                  <span>09:00 - 22:00</span>
               </div>
            </Tippy>
            <Tippy content="+84  90 592 97 72">
               <div className={cx('phone')}>
                  <a href="tel:+84  90 592 97 72">
                     <FontAwesomeIcon
                        icon={faPhone}
                        className={cx('topbar-icon')}
                     />
                     <span>+84 90 592 97 72</span>
                  </a>
               </div>
            </Tippy>
         </div>

         <div className={cx('social-media')}>
            <Tippy content="Follow on Facebook">
               <a href="https://www.facebook.com/noirstudiosvn/about/?ref=page_internal">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                     <path
                        fill="currentColor"
                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                     />
                  </svg>
               </a>
            </Tippy>

            <Tippy content="Follow on Instagram">
               <a href="https://www.instagram.com/noir.studios/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                     />
                  </svg>
               </a>
            </Tippy>

            <Tippy content="Send us an email">
               <a href="mailto:noirstudiosvn@gmail.com">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                     <path
                        fill="currentColor"
                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                     />
                  </svg>
               </a>
            </Tippy>
         </div>
      </div>
   );
}

export default Topbar;
