import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./button";
import { motion } from "framer-motion";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pn0pyod", "template_22hvahe", form.current, {
        publicKey: "A-O7VoAoqxnkrg88M",
      })
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.section className="space-y-8 px-6 py-12 max-w-5xl mx-auto">
      {/* Title with proper spacing */}
      <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block space-y-8">
        Contact Me
      </h2>

      {/* Contact Form Container */}
      <div
        id="contact"
        className="bg-gray-50 dark:bg-gray-900 p-10 rounded-lg shadow-lg space-y-6"
      >
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="First Name"
              required
              className="p-3 rounded-lg w-full border focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Last Name"
              required
              className="p-3 rounded-lg w-full border focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="p-3 rounded-lg w-full border focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <input
            type="number"
            name="phone_number"
            placeholder="Phone No."
            required
            className="p-3 rounded-lg w-full border focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Type your message..."
            className="p-3 rounded-lg w-full border focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          ></textarea>
          <div className="flex items-center gap-3">
            <input type="checkbox" required className="w-4 h-4" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              I accept the terms and conditions
            </span>
          </div>
          <Button className="rounded-full w-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105">
            Submit
          </Button>
        </form>
      </div>
    </motion.section>
  );
}
