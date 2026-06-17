"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function ContactMe() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    emailjs
      .sendForm("service_pn0pyod", "template_22hvahe", form.current, {
        publicKey: "A-O7VoAoqxnkrg88M",
      })
      .then(
        () => {
          setSending(false);
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 5000);
        },
        (err) => {
          setSending(false);
          setError(true);
          console.log("FAILED...", err.text);
        }
      );
  };

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-2 rounded-2xl bg-gradient-to-br from-rose-600 via-indigo-600 to-sky-600 p-6 space-y-6 text-white flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Let's Talk</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach
              out — I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <FaEnvelope className="w-3.5 h-3.5" />
              </div>
              <a
                href="mailto:chaitanyaumbarkar2002@gmail.com"
                className="text-white/90 hover:text-white transition-colors break-all"
              >
                chaitanyaumbarkar2002@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <FaPhone className="w-3.5 h-3.5" />
              </div>
              <span className="text-white/90">+91 9579138912</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Find me on
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/ChaitanyaU17"
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <FaGithub className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/chaitanya-umbarkar/"
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </Link>
              <Link
                href="https://x.com/CUmbarkar"
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <FaSquareXTwitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white/5 -mb-10 -mr-10 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-white/5 -mb-4 -mr-4 pointer-events-none" />
        </div>

        <div
          id="contact"
          className="md:col-span-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  First Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="text"
                    name="user_firstname"
                    placeholder="chaitanya"
                    required
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Last Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="text"
                    name="user_lastname"
                    placeholder="umbarkar"
                    required
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <input
                  type="email"
                  name="user_email"
                  placeholder="chaitanya@gmail.com"
                  required
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                Phone
              </label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="+91 00000 00000"
                  required
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project..."
                required
                className="w-full px-4 py-2.5 rounded-xl text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition resize-none"
              />
            </div>

            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                required
                id="terms"
                className="w-4 h-4 rounded accent-indigo-600"
              />
              <label
                htmlFor="terms"
                className="text-xs text-gray-600 dark:text-gray-400"
              >
                I agree to the terms and conditions
              </label>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-indigo-600 text-white text-sm font-semibold hover:opacity-90 disabled:opacity-60 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {sending ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="w-3.5 h-3.5" />
                  Send Message
                </>
              )}
            </button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-emerald-600 dark:text-emerald-400 font-medium"
              >
                Message sent successfully!
              </motion.p>
            )}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-rose-600 dark:text-rose-400 font-medium"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}