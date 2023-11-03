import React from 'react';
import classNames from 'classnames/bind';
import styles from './Banner.module.css';

const cx = classNames.bind(styles);

// banner text element was removed but keeping it below just in case
// <p className={cx('banner-text')}>Enter a Spotify playlist link to archive it.</p>

const Banner = () => {
  return (
    <div className={cx('banner-container')}>
      <h1 className={cx('banner-heading')}>Welcome to The Playlist Archiver</h1>
    </div>
  );
};

export default Banner;