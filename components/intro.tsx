"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import toast from "react-hot-toast";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  
  const acceptDownload = () => {
    toast((t) => (
      <div>
        <p className="mb-2 text-xl">Proceed with download?</p>
        <div className="flex justify-center gap-4">
          <button
            className="bg-green-800 text-white text-xl px-4 py-2 rounded-xl font-bold"
            onClick={() => {
              toast.dismiss(t.id);
              const link = document.createElement('a');
              link.href = "/Resume Santiago Martinez Vallejo.pdf";
              link.download = "Resume Santiago Martinez Vallejo.pdf";
              link.target = "_blank";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Yes
          </button>
          <button
            className="bg-red-700 text-white text-xl px-4 py-2 rounded-xl font-bold"
            onClick={() => toast.dismiss(t.id)}
          >
            No
          </button>
        </div>
      </div>
    ))
  }

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: 'tween',
              duration: 0.2,
             }}
          >
            <Image src="/yoyo2.jpeg"
              alt='Santiago'
              width="192"
              height="192"
              quality="95"
              priority={true}
              className='h-60 w-60 ¿ rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />            
          </motion.div>

          <motion.span className='text-6xl absolute bottom-0 right-[1rem]'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
             }}
          >
            ✌️
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I&apos;m Santiago.</span> I&apos;m a{" "}
        <span className="font-bold">Software Engineer student specializing in JavaScript Development. </span>
        <span className="font-bold">Welcome to my portfolio!</span> My journey includes internships and a 
            range of projects that display my passion for coding <span className="italic">Fullstack Applications</span>. My focus is{" "}
        <span className="underline">Next.js, NestJS and Spring Boot</span>.
      </motion.h1>

      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="w-[18rem] sm:w-auto group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="w-[18rem] sm:w-auto group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          /* href="/Resume Santiago Martinez Vallejo.pdf" */
          onClick={acceptDownload}
        >
          Download CV/Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/santiago-martinez-vallejo/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/SantiagoMtz25"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
