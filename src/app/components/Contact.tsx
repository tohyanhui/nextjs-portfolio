"use client";

import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { socialLinks, contactInfo } from "../config/navigation";

const BUTTON_RESET_DELAY = 3000;
const inputClass = "w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15 dark:border-gray-600 dark:bg-dark-background-secondary dark:text-white";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [buttonText, setButtonText] = useState("Send message");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
          template_params: formState,
        }),
      });
      if (response.ok) {
        setButtonText("Message sent!");
        setFormState({ name: "", email: "", message: "" });
      } else {
        console.error("Send failed:", await response.json().catch(() => ({})));
        setButtonText("Send failed, try again");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setButtonText("Send failed, try again");
    }
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setButtonText("Send message"), BUTTON_RESET_DELAY);
  };

  return (
    <section id="contact" className="flex min-h-[100svh] items-center bg-[#f2f6f4] py-24 dark:bg-dark-background-secondary">
      <div className="container mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-teal-300">Get in touch</p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold text-gray-950 dark:text-white sm:text-4xl">Have a role or an idea worth building?</h2>
            <p className="mt-5 max-w-md leading-relaxed text-gray-600 dark:text-gray-300">I&apos;m interested in opportunities across applied AI and software engineering. Let&apos;s talk about what you&apos;re working on.</p>
            <a href={`mailto:${contactInfo.email}`} className="mt-8 inline-flex max-w-full items-center gap-2 break-all border-b border-primary pb-1 font-semibold text-primary hover:text-gray-950 dark:border-teal-300 dark:text-teal-300 dark:hover:text-white">{contactInfo.email} <LuArrowUpRight className="shrink-0" aria-hidden="true" /></a>
            <div className="mt-8 flex gap-5 text-sm font-medium text-gray-600 dark:text-gray-300">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary dark:hover:text-teal-300"><FaGithub aria-hidden="true" /> GitHub</a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary dark:hover:text-teal-300"><FaLinkedin aria-hidden="true" /> LinkedIn</a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 border-t-2 border-gray-950 pt-6 dark:border-teal-300">
            <h3 className="text-lg font-semibold text-gray-950 dark:text-white">Send a message</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label><input id="name" name="name" required autoComplete="name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className={inputClass} /></div>
              <div><label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label><input id="email" name="email" type="email" required autoComplete="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className={inputClass} /></div>
            </div>
            <div><label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label><textarea id="message" name="message" rows={5} required value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className={inputClass} /></div>
            <button type="submit" disabled={buttonText === "Sending..."} className="inline-flex w-full items-center justify-center rounded-md bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary disabled:opacity-60 dark:bg-white dark:text-gray-950 dark:hover:bg-teal-200">{buttonText}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
