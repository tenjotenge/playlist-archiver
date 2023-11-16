import React from 'react';
import { PaymentForm } from 'react-square-web-payments-sdk';
import styles from './CreditCardForm.module.css';
import classNames from 'classnames/bind';
import { CreditCard } from 'react-square-web-payments-sdk';

const cx = classNames.bind(styles);

const CreditCardForm = () => {
  const handleCardTokenizeResponse = async (token, verifiedBuyer) => {
    try {
      const response = await fetch("/api/pay", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          sourceId: token.token,
        }),
      });

      const responseData = await response.json();
      console.log(responseData);

      // Handle the response as needed (e.g., show success message to the user)
    } catch (error) {
      console.error('Error processing payment:', error);

      // Handle the error as needed (e.g., show error message to the user)
    }
  };

  return (
    <div className={cx('payment-container')}>
      <PaymentForm
        applicationId="sq0idp-oYFQYbcNpm0cLjDTsknQnQ"
        cardTokenizeResponseReceived={handleCardTokenizeResponse}
        locationId='XXXXXXXXXX'
      >
        <CreditCard />
      </PaymentForm>
    </div>
  );
}

export default CreditCardForm;
