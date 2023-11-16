import { Client } from 'square';
import { randomUUID } from 'crypto';

require('dotenv').config();

// Define a custom toJSON method for BigInt to prevent serialization error
//BigInt.prototype.toJSON = function () {
  //return this.toString();
//};

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: 'production'
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { result } = await paymentsApi.createPayment({
        idempotencyKey: randomUUID(),
        sourceId: req.body.sourceId,
        amountMoney: {
          currency: 'USD',
          amount: 100
        }
      });

      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error processing payment');
    }
  } else {
    res.status(500).send('Invalid request method');
  }
}
