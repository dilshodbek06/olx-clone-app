"use client";

import { Input } from "@/components/ui/input";
import useAdStore from "@/store/use-ad-store";

const ContactForm = () => {
  const {
    email,
    setEmail,
    personName,
    setPersonName,
    phoneNumber,
    setPhoneNumber,
  } = useAdStore();
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
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
