"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholder-and-vanishinput";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LandingPage = () => {
  const router = useRouter();
  const [route, setRoute] = useState("");

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // add delay
    router.push("source-selection");
  };
  return (
    <div className='h-[100vh] flex flex-col justify-center  items-center px-4 bg-dot-white/[0.2] bg-black '>
      <h2 className='mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black'>
        Requirement Ellicitation from Multi Source Data Application
      </h2>
      <p className='mb-5 sm:mb-5 text-base  dark:text-white text-black'>
        Input your query...
      </p>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={(e) => {
          setRoute(e.target.value);
        }}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default LandingPage;
