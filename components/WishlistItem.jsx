import React from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "@/store/wishlistSlice";
import Link from "next/link";

const WishlistItem = ({ data }) => {
  const p = data.attributes;

  const dispatch = useDispatch();

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* Image Start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
          width={120}
          height={120}
          priority={true}
        />
      </div>
      {/* Image End */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Product Title */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {p.name}
          </div>
          {/* Product Subtitle */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {p.subtite}
          </div>
          {/* Product price */}
          <div className="text-sm md:text-md font-medium text-black">
            MRP : &#8377;{p.price}
          </div>
        </div>
        {/* Product Subtitle */}
        <div className="text-sm md:text-md font-medium text-black/[0.5] hidden md:block">
          {p.subtite}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <Link href="/cart">
            <button className="w-full px-5 py-3 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">Go to Cart</button>
            </Link>
            <RiDeleteBin6Line
              onClick={() => dispatch(removeFromWishlist({ id: data.id }))}
              className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
