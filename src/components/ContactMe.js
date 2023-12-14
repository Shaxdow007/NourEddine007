import React from "react";
import { useForm, ValidationError } from "@formspree/react";
const ContactMe = () => {
  const [state, handleSubmit] = useForm("xdorqowo");
  return (
    <section id="contact" className="my-24 bg-darkColor">
      <div className="container mx-auto p-2">
        <h5 className="uppercase text-white my-12 text-center text-4xl font-bold">
          let's work <br className="hidden md:block" /> together
        </h5>
        <form className="capitalize" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-white/50 inline-block mb-4">
              Email Adress :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="nourEddine@gmail.com"
              required
              autoComplete="off"
              className="w-full px-2 py-4 rounded-md text-white bg-primaryColor/10 ring-2 ring-primaryColor/50 focus:ring-primaryColor/80 outline-none"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="my-6">
            <label
              htmlFor="message"
              className="text-white/50 inline-block mb-4"
            >
              Message :
            </label>
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="10"
              className="w-full px-2 py-4 rounded-md text-white bg-primaryColor/10 ring-2 ring-primaryColor/50 focus:ring-primaryColor/80 outline-none"
            >
              YOUR MESSAGE HER!
            </textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="mb-6 capitalize text-white bg-primaryColor/70 px-12 py-2 rounded-full hover:bg-primaryColor/80 disabled:bg-primaryColor/25 disabled:cursor-not-allowed"
          >
            {state.submitting ? "sending..." : "send"}
          </button>
          {state.succeeded && (
            <p className="text-green-500 text-2xl my-4">
              you message has been sent successfully!!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
