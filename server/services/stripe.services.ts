import stripePackage from 'stripe';
import dotenv from 'dotenv';
import { ITicket } from '../models/booking.model';

// ENV variables
dotenv.config();
const STRIPE_API_KEY = process.env.STRIPE_API_KEY;

// ids from products created in Stripe
const stripeItemIds = [
  {
    rate: 'Normal',
    priceId: 'price_1OUfuaHz0pjBbTBVkq996PjC' 
  },
  {
    rate: 'Étudiant',
    priceId: 'price_1OUfupHz0pjBbTBV6MmV9CUF' 
  },
  {
    rate: 'Réduit',
    priceId: 'price_1OUfv6Hz0pjBbTBVQ2snRsEr' 
  }
]

function findPriceId(rate: 'Normal' | 'Étudiant' | 'Réduit') {
  stripeItemIds.forEach((item) => {
    if (item.rate === rate) return item.priceId
  })
  return ''
}

async function createCheckoutSession(items: ITicket[], successUrl: string, cancelUrl: string) {
  const stripe = new stripePackage(STRIPE_API_KEY!);

  const stripeItems = items.map((item) => {
    return ({
      price: findPriceId(item.rate),
      quantity: item.amount
    })
  })
  
  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: 'payment',
    success_url: `${successUrl}?success=true`,
    cancel_url: `${cancelUrl}?canceled=true`,
  });

  return session

  // res.redirect(303, session.url);
}

export { createCheckoutSession }