"use client";

import { Input } from "@/components/ui/input";

const ContactForm = () => {
  return (
    <div>
      <h2 className="text-white font-bold text-lg">Contact information</h2>
      <div className="mt-3">
        <div>
          <label htmlFor="name" className="text-white">
            Contact person *
          </label>
          <Input
            className="rounded-sm py-6 text-xl text-white mt-1 placeholder:text-lg max-w-[30rem]"
            id="name"
            placeholder="enter the name..."
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="text-white">
            Email address *
          </label>
          <Input
            className="rounded-sm py-6 text-xl text-white mt-1 placeholder:text-lg max-w-[30rem]"
            id="email"
            placeholder="enter the email..."
          />
        </div>
        <div className="mt-4">
          <label htmlFor="phone" className="text-white">
            Phone number *
          </label>
          <Input
            type="tel"
            className="rounded-sm py-6 text-xl text-white mt-1 placeholder:text-lg max-w-[30rem]"
            id="phone"
            placeholder="enter the phone..."
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
