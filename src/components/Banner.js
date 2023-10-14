import React from 'react';
import classNames from 'classnames/bind';
import styles from './Banner.module.css';

const cx = classNames.bind(styles);

const Banner = () => {
  return (
    <div className={cx('banner-container')}>
      <h1 className={cx('banner-text')}>Floweryng Global</h1>
    </div>
  );
};

export default Banner;