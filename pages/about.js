import React from "react";
import Wrapper from "@/components/Wrapper";

const About = () => {
  return (
    <div className="min-h-[650px] my-4 flex items-center">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            About Us
          </div>
          <div className="markdown text-[15px] md:text-[21px] font-medium mb-5 leading-tight">
            Here at Online Shoe Store, welcome! Helping you put your best foot
            forward is our one and only passion at Online Shoe Store. We have
            what you need, whether you're looking for the ideal pair of sneakers
            to take on the city streets, chic heels for a night out, or cozy
            every day shoes to keep up with your busy lifestyle. We have faith
            in the influence of premium footwear. Every pair of shoes in our
            collection is hand-selected in order to guarantee that they live up
            to our high standards. You can be sure that every shoe you find at
            Online Shoe Store is made with skill and attention to detail. No two
            feet and the fashion choices of our consumers are unique. Shoes for
            men, women, and kids are all part of our selection, and there are
            many different brands, styles, and sizes available. We have
            something for everyone, from the newest current trends to timeless
            classics.
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
