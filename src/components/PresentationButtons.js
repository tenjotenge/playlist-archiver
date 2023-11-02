import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './PresentationButtons.module.css';

const cx = classNames.bind(styles);

const PresentationButtons = () => {
  return (
    <div className={cx('buttonContainer')}>
      <Link href="/progress-report.pdf">
        <a target="_blank">
          <button className={cx('button')}>Progress Report</button>
        </a>
      </Link>
      <Link href="/final-presentation.pdf">
        <a target="_blank">
          <button className={cx('button')}>Final Presentation</button>
        </a>
      </Link>
    </div>
  );
};

export default PresentationButtons;
