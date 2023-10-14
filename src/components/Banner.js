import React from 'react';
import classNames from 'classnames/bind';
import styles from './Banner.module.css';

const cx = classNames.bind(styles);

const Banner = () => {
  return (
    <div className={cx('banner-container')}>
      <h1 className={cx('banner-heading')}>Welcome to The Playlist Archiver</h1>
      <p className={cx('banner-instructions')}>Enter a Spotify playlist link to archive it.</p>
    </div>
  );
};

export default Banner;