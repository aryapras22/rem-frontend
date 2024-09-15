"use client";
import SourceCard from "./source-components/SourceCard";
import { BlackButton } from "./ui/buttons";

const SourcePage = () => {
  function handleClick() {
    // generate data
  }
  function handleSubmit() {
    // all sources data to db
  }

  return (
    <div className='min-h-screen bg-black bg-dot-white/[0.2] flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center h-full'>
        {" "}
        <h2 className='text-xl text-center sm:text-5xl dark:text-white text-black '>
          Select the source of Requirement
        </h2>
      </div>

      <div className='flex justify-around pt-10 w-full'>
        <SourceCard onClick={handleClick} source='x'></SourceCard>
        <SourceCard onClick={handleClick} source='news'></SourceCard>
        <SourceCard onClick={handleClick} source='playstore'></SourceCard>
        <SourceCard onClick={handleClick} source='appstore'></SourceCard>
      </div>
      <div className='flex justify-center items-center mt-10 h-[30vh]'>
        <BlackButton
          text='Generate User Story'
          onSubmit={handleSubmit}
        ></BlackButton>
      </div>
    </div>
  );
};

export default SourcePage;
