import React from "react";
import Wrapper from "@/components/Wrapper";

const Contact = () => {
  return (
    <div className="min-h-[650px] my-4 flex items-center">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Feel Free Contact Us
          </div>
          <div className="max-w-[600px] rounded-lg p-5 border border-black mb-4 mx-auto flex flex-col">
            <form
              action="https://formspree.io/f/xoqopjlp"
              method="POST"
              className="flex flex-col pb- max-w-[600px] w-full"
            >
              <input
                className="bg-white p-3 my-4 rounded-lg border border-black"
                type="text"
                placeholder="Name"
                name="name"
                autoComplete="off"
                required
              />
              <input
                className="bg-white p-3 rounded-lg border border-black"
                type="email"
                placeholder="Email"
                name="email"
                autoComplete="off"
                required
              />

              <textarea
                className="bg-white p-3 my-4 rounded-lg border border-black"
                name="message"
                cols="30"
                rows="6"
                placeholder="Message"
              ></textarea>
              <button
                type="submit"
                value="send"
                autoComplete="off"
                required
                className="text-white  rounded-lg border-2 border-black bg-black hover:bg-black/[0.5] px-4 py-3 my-8 mx-auto flex items-center"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
