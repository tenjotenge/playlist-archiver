import React from 'react';
import { PaymentForm } from 'react-square-web-payments-sdk';
import styles from './CreditCardForm.module.css';
import classNames from 'classnames/bind';
import { CreditCard } from 'react-square-web-payments-sdk';

const cx = classNames.bind(styles);

const CreditCardForm = () => {
  return (
    <div className={cx('payment-container')}>
      <PaymentForm
        applicationId="sandbox-sq0idb-cuAr6GdfGcn6miY7Y7JN_Q"
        cardTokenizeResponseReceived={(token, verifiedBuyer) => {
          console.log('token:', token);
          console.log('verifiedBuyer:', verifiedBuyer);
        }}
        locationId='XXXXXXXXXX'
      >
        <CreditCard/>
      </PaymentForm>
    </div>
  );
}

export default CreditCardForm;
