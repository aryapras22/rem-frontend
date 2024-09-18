"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholder-and-vanishinput";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LandingPage = () => {
  const router = useRouter();
  const [route, setRoute] = useState("");

  const placeholders = [
    "Covid 19",
    "Healthcare",
    "Food Management",
    "Economic Analysis",
    "Climate Change",
    
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // add delay

    setTimeout(() => {
      router.push("source-selection");
    }, 2000);
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
