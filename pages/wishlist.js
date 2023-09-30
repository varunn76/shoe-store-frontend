import React, { useMemo, useState } from "react";
import WishlistItem from "@/components/WishlistItem";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

import { makePaymentRequest } from "@/utils/api";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

const wishlist = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const subTotal = useMemo(() => {
    return wishlistItems.reduce((total, val) => total + val.attributes.price, 0);
  }, [wishlistItems]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.stripeSession.id,
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {wishlistItems.length > 0 && (
          <>
            {/* Heading And Paragraph start */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:test-[34px] mb-5 font-semibold leading-tight">
                Shopping Wishlist
              </div>
            </div>
            {/* Heading And Paragraph End */}

            {/* Cart Content start */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* Cart Items Start */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Wishlist Items</div>
                {wishlistItems.map((item) => (
                  <WishlistItem key={item.id} data={item} />
                ))}
              </div>
              {/* Cart Items End */}
            </div>

            {/* Cart Content end */}
          </>
        )}
        {/* This is Empty Screen */}
        {wishlistItems.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
              priority={true}
              alt="Empty Cart"
            />
            <span>Your wishlist is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your wishlist.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              href="/"
              className="py-4 px-8 rounded-full bg-black text-white text-lg 
          font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Contiue Shopping
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default wishlist;
