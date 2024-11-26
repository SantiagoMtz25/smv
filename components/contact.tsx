"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import TitleHeader from "./title-header";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const emailRef = React.useRef<HTMLInputElement>(null);
  const messageRef = React.useRef<HTMLTextAreaElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <TitleHeader title="Contact" />

      <p className="text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          santimtzv01@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          toast.promise(
            sendEmail(formData),
            {
              loading: "Sending email...",
              success: "Email sent successfully!",
              error: "Failed to send email",
            }
          ).then(() => {
            if (emailRef.current) emailRef.current.value = "";
            if (messageRef.current) messageRef.current.value = "";
          });
          /* const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!"); */
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          ref={emailRef}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          ref={messageRef}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}