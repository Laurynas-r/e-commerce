import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HYd1JLKHsvZ1KyvIeLvsmW569bMbrNAikf3BDYCfHkFSo6sWheBLjnQ9mDcAg71jaFjfqUrz7Lhk3H14SscXiKn00WqVHHL0g";


    return (
        <StripeCheckout
            label="Pay Now"
            currency="DKK"
            billingAddress
            shippingAddress
            name="Clothing A/S"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton; 