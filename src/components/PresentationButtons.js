import classNames from 'classnames/bind';
import styles from './PresentationButtons.module.css';

const cx = classNames.bind(styles);

const PresentationButtons = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank');
    newWindow.focus();
  };

  return (
    <div className={cx('buttons-container')}>
      <button
        className={cx('presentation-button')}
        id={cx('pb-1')}
        onClick={() => openInNewTab('/progress-report.pdf')}
      >
        Progress Report
      </button>
      <button
        className={cx('presentation-button')}
        id={cx('pb-2')}
        onClick={() => openInNewTab('/final-presentation.pdf')}
      >
        Final Presentation
      </button>
    </div>
  );
};

export default PresentationButtons;
