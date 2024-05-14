import React from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(
      "Thank you for reaching out to me! I will reply you as soon as possible.",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
  };
  return (
    <div className="bg-gray-50/10 p-10 rounded-md">
      <div className="flex flex-col items-center justify-center mb-6">
        <h1 className="text-2xl font-bold mb-2 dark:text-white/80 mt-2">
          CONTACT ME
        </h1>
        <div className="w-[80%] border-b border-[#438eff]"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full text-white/80 bg-transparent focus:outline-none focus:border-[#3B82F6] border shadow-md border-[#1e5799] p-2 rounded-md mt-1 placeholder:text-white/30"
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full text-white/80 bg-transparent focus:outline-none focus:border-[#3B82F6] border shadow-md border-[#1e5799] p-2 rounded-md mt-1 placeholder:text-white/30"
            required
          />

          <textarea
            type="text"
            rows={5}
            placeholder="Message"
            className="w-full text-white/80 bg-transparent focus:outline-none focus:border-[#3B82F6] border shadow-md border-[#1e5799] p-2 rounded-md mt-1 placeholder:text-white/30"
            required
          />

          <button className="bg-[#1e5799] w-full text-sm p-2 mt-2 rounded-md text-white/80 hover:bg-[#3B82F6] border border-white/80 transition-all ease-linear duration-200">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
