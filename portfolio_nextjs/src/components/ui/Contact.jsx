"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle, AlertCircle, Loader2, Heart } from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";
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
    <section className="py-2">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 relative p-8 rounded-3xl overflow-hidden bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-gray-950/95 border border-gray-100 dark:border-white/10 shadow-sm dark:shadow-lg"
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10 dark:opacity-20"
            style={{ background: "linear-gradient(135deg, #F472B6, #A855F7)" }}
          />

          <div className="relative z-10 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Let's Talk</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Feel free to reach out for collaborations, project inquiries, or just to say hello!
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:chaitanyaumbarkar2002@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-rose-500 to-pink-500 flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Email</p>
                  <p className="text-xs font-medium text-gray-900 dark:text-white group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors truncate">
                    chaitanyaumbarkar2002@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Phone</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">+91 9579138912</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Location</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Connect</p>
              <div className="flex items-center gap-3">
                <Link href="https://github.com/ChaitanyaU17" target="_blank"
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </Link>
                <Link href="https://www.linkedin.com/in/chaitanya-umbarkar/" target="_blank"
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <Linkedin className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </Link>
                <Link href="https://x.com/CUmbarkar" target="_blank"
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <FaSquareXTwitter className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs text-gray-500 dark:text-gray-400">Made with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
              <span className="text-xs text-gray-500 dark:text-gray-400">by Chaitanya</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3 relative p-8 rounded-3xl overflow-hidden bg-white dark:bg-gradient-to-br dark:from-gray-900/95 dark:to-gray-950/98 border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full blur-3xl opacity-10 dark:opacity-20"
            style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
          />

          <form ref={form} onSubmit={sendEmail} className="relative z-10 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">First Name</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input type="text" name="user_firstname" placeholder="Chaitanya" required
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Last Name</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input type="text" name="user_lastname" placeholder="Umbarkar" required
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Email Address</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <input type="email" name="user_email" placeholder="chaitanya@example.com" required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Phone Number</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <input type="tel" name="phone_number" placeholder="+91 00000 00000" required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Your Message</label>
              <textarea name="message" rows="4" placeholder="Tell me about your project, ideas, or just say hello..." required
                className="w-full px-4 py-3.5 rounded-xl text-sm bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 resize-none" />
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" required id="terms" className="w-4 h-4 rounded accent-indigo-500" />
              <label htmlFor="terms" className="text-xs text-gray-600 dark:text-gray-400">
                I agree to the terms and conditions
              </label>
            </div>

            <button type="submit" disabled={sending}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-rose-500 via-indigo-500 to-purple-500 text-white font-semibold hover:opacity-90 disabled:opacity-60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg">
              {sending ? (
                <><Loader2 className="w-5 h-5 animate-spin" />Sending...</>
              ) : (
                <><Send className="w-5 h-5" />Send Message</>
              )}
            </button>

            {sent && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30">
                <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  Message sent successfully! I'll get back to you soon.
                </span>
              </motion.div>
            )}

            {error && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-rose-50 dark:bg-rose-500/20 border border-rose-200 dark:border-rose-500/30">
                <AlertCircle className="w-5 h-5 text-rose-500 dark:text-rose-400" />
                <span className="text-sm font-medium text-rose-700 dark:text-rose-400">
                  Something went wrong. Please try again.
                </span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}