"use client";
import { BlackButton, WhiteButton } from "./ui/buttons";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { userStoriesFromData } from "@/database/mockData";
import { useRouter } from "next/navigation";

const UserStoryPage = () => {
  const data = userStoriesFromData;
  const router = useRouter();
  // handle copy
  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
  };

  // route to /usecase
  const handleGenerateUseCase = () => {
    router.push("usecase");
  };

  return (
    <div className='bg-black min-h-screen bg-dot-white/[0.2] pt-10 px-10'>
      <div className='flex gap-4'>
        <div className='mx-auto min-h-[60vh] p-8 w-3/4 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] p'>
          <h1 className='text-2xl text-white font-bold bg-gradient-to-r from-indigo-300 to-purple-300 w-fit p-1'>
            User Story
          </h1>
          <div className='overflow-y-scroll max-h-[60vh] py-2'>
            {data.map((item, index) => (
              <TextGenerateEffect
                key={index}
                words={item.userstory}
                className='text-white text-base'
              />
            ))}
          </div>
        </div>
        <div className='w-1/4 flex flex-col'>
          <div className='w-full max-h-[30vh] mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]'>
            <h1 className='text-xl text-white font-bold bg-gradient-to-r from-indigo-300 to-purple-300 w-fit'>
              Who
            </h1>
            <div className='overflow-y-scroll max-h-[20vh]'>
              {data.map((item, index) => (
                <TextGenerateEffect
                  key={index}
                  words={item.who}
                  className='text-white text-base'
                />
              ))}
            </div>
          </div>
          ``
          <div className='w-full max-h-[30vh]  mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]'>
            <h1 className='text-xl text-white font-bold bg-gradient-to-r from-indigo-300 to-purple-300 w-fit'>
              What
            </h1>
            <div className='overflow-y-scroll max-h-[20vh]'>
              {data.map((item, index) => (
                <TextGenerateEffect
                  key={index}
                  words={item.what}
                  className='text-white text-base'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-10 justify-center items-center min-h-[20vh]'>
        <BlackButton text='Copy User Story' onClick={handleCopy}></BlackButton>
        <BlackButton
          text='Generate Use Case'
          onClick={handleGenerateUseCase}
        ></BlackButton>
      </div>
    </div>
  );
};

export default UserStoryPage;
