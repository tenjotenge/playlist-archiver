import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import styles from './PaymentExampleButton.module.css';

const cx = classNames.bind(styles);

function PaymentExampleButton() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/payment-example');
  };

  return (
    <button className={cx('payment-example-button')} onClick={handleNavigate}>
      Go to Payment Example
    </button>
  );
}

export default PaymentExampleButton;
