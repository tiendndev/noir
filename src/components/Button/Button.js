import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
   className,
   children,
   primary = false,
   secondary = false,
   outline = false,
   rounded = false,
}) {
   let Comp = 'button';
   const classes = cx('wrapper', {
      [className]: classNames,
      primary,
      secondary,
      outline,
      rounded,
   });
   return (
      <Comp className={classes}>
         <span className={cx('title')}>{children}</span>
      </Comp>
   );
}

export default Button;
