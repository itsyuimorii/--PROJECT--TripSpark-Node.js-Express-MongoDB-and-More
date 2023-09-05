/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';


const stripe = Stripe('pk_test_51NmiYJE0SSI1tAk4Vth31s3Wr9QDQTDPkq90bpV6VYcYQHdKbIjs9QtdsklIwlMROkgHt6SYG5UxnWZuVPpiIjW100LbNUnz8x');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    if (session.hasOwnProperty('id')) {
      showAlert('success', 'Payment successful!');
    }

    console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.sessionId
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
