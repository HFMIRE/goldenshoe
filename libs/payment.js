import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export async function initiateCheckout({ lineItems } = {}) {
  const stripe = await stripePromise;

  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}

// export const createCheckOutSession = async (item) => {
//   //   setLoading(true);
//   const stripe = await stripePromise;
//   const checkoutSession = await axios.post("/api/create-stripe-session", {
//     item: item,
//   });
//   console.log(checkoutSession.data.id);
//   const result = await stripe.redirectToCheckout({
//     sessionId: checkoutSession.data.id,
//   });
//   if (result.error) {
//     console.error(result.error);
//     alert(result.error.message);
//   }
//   //   setLoading(false);
// };
