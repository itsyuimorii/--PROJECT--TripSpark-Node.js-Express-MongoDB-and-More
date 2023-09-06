/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const _stripe = Stripe('pk_test_51NmiYJE0SSI1tAk4Vth31s3Wr9QDQTDPkq90bpV6VYcYQHdKbIjs9QtdsklIwlMROkgHt6SYG5UxnWZuVPpiIjW100LbNUnz8x');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    console.log(session);

    // 2) Create checkout form + change credit card
    await _stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
