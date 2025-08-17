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
    <div className="bg-gray-50/10 p-4 sm:p-6 md:p-10 rounded-md">
      <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-readable mt-2 text-center">
          CONTACT ME
        </h1>
        <div className="w-[80%] border-b border-[#438eff]"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 sm:gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full text-readable bg-transparent focus:outline-none focus:border-[#3B82F6] border shadow-md border-[#1e5799] p-3 sm:p-4 rounded-md mt-1 placeholder:text-white/50 text-sm sm:text-base"
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full text-readable bg-transparent focus:outline-none focus:border-[#3B82F6] border shadow-md border-[#1e5799] p-3 sm:p-4 rounded-md mt-1 placeholder:text-white/50 text-sm sm:text-base"
            required
          />

          <textarea
            type="text"
            rows={4}
            placeholder="Message"
            className="w-full text-readable bg-transparent focus:outline-none focus:border-[#3B82F6] border shadow-md border-[#1e5799] p-3 sm:p-4 rounded-md mt-1 placeholder:text-white/50 text-sm sm:text-base resize-none"
            required
          />

          <button className="bg-[#1e5799] w-full text-sm sm:text-base p-3 sm:p-4 mt-2 sm:mt-3 rounded-md text-white hover:bg-[#3B82F6] border border-white/80 transition-all ease-linear duration-200 font-medium">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
