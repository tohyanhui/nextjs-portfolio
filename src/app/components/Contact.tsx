"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { socialLinks, contactInfo } from "../config/navigation";

const BUTTON_RESET_DELAY = 3000;

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send Message");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setButtonText("Sending...");

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
            template_params: {
              name: formState.name,
              email: formState.email,
              message: formState.message,
            },
          }),
        }
      );

      if (response.ok) {
        setButtonText("Message Sent!");
        setFormState({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Send failed:", errorData);
        setButtonText("Send Failed, Try Again");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setButtonText("Send Failed, Try Again");
    }

    timeoutRef.current = setTimeout(() => {
      setButtonText("Send Message");
    }, BUTTON_RESET_DELAY);
  };

  return (
    <section
      id="contact"
      className="py-24 translate-y-4 transition-all duration-500 opacity-0"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16">
          Interested in working together? Let&apos;s connect!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
            {/* Email */}
            <div className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {contactInfo.email}
              </p>
            </div>
            {/* Location */}
            <div className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">{contactInfo.location}</p>
            </div>
            {/* Social */}
            <div className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Social</h3>
              <div className="flex justify-center space-x-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-dark-background-secondary rounded-full flex items-center justify-center text-gray-600 hover:text-primary dark:hover:text-primary dark:text-gray-400 transition-all duration-300"
                  aria-label="Visit GitHub profile"
                >
                  <FaGithub />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-dark-background-secondary rounded-full flex items-center justify-center text-gray-600 hover:text-primary dark:hover:text-primary dark:text-gray-400 transition-all duration-300"
                  aria-label="Visit LinkedIn profile"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-dark-background-secondary rounded-full flex items-center justify-center text-gray-600 hover:text-primary dark:hover:text-primary dark:text-gray-400 transition-all duration-300"
                  aria-label="Visit X (Twitter) profile"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-dark-background p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-background-secondary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-background-secondary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-background-secondary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20 shadow-blue-200/20 dark:shadow-blue-700/10"
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
