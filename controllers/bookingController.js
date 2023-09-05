const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});
// console.log('Stripe API Key:', process.env.STRIPE_SECRET_KEY);
const Tour = require('../models/tourModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get the currently booked tour
  const tour = await Tour.findById(req.params.tourId);

  // 2) Create a new Price in Stripe
  const price = await stripe.prices.create({
    unit_amount: tour.price * 100, // In cents
    currency: 'usd',
    product_data: {
      name: `${tour.name} Tour`,
      description: tour.summary,
      images: [`https://www.natours.dev/img/tours/${tour.imageCover}`],
    },
  });

  // 3) Create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/`,
    cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`,
    customer_email: req.user.email, // This is the email of the user who is logged in
    client_reference_id: req.params.tourId, // This is the tour id
    line_items: [{
      price: price.id, // Assign the ID of the created Price object here
      quantity: 1
    }]
  });

  // 4) Create session as response
  res.status(200).json({
    status: 'success',
    session
  });
});
