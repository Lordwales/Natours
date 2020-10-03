/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert.js';
const stripe = Stripe(
  'pk_test_51HTQEKC3p169ZTR4nRk7C1Vk1Q3NMxNxOrYURfBHQ4cyEOHFK6mkbdjghxedr7LCyTDHCgBM6SpzR9YPm5IUclL400rqXMmUr3'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
