"use client";
import { Label } from "./ui/label";
import Textarea from "./ui/textarea";
import { BlackButton } from "./ui/buttons";
import { useState } from "react";
import { useRouter } from "next/navigation";

const PreproPage = () => {
  const data = {
    "1": "The app is really helpful for daily task management, but I wish it had more customization options.",
    "2": "I really like the app, but it's a bit hard to navigate.",
    "3": "The app is great, but I wish it had more features.",
    "4": "I love the app, but I wish it had more customization options.",
  };
  const [textArea, setTextArea] = useState(JSON.stringify(data, null, 2));
  const router = useRouter();

  function handleOnSubmit(e: any) {
    e.preventDefault();
    console.log(textArea);
    router.push("/userstory");
  }

  function handleOnChange(e: any) {
    setTextArea(e.target.value);
  }

  return (
    <div className='bg-black bg-dot-white/[0.2] min-h-screen'>
      <h1 className='text-xl text-center sm:text-5xl dark:text-white text-black '>
        Result
      </h1>
      <div className='px-10 '>
        <form action='' onSubmit={handleOnSubmit}>
          <Label>Edit Result : </Label>
          <Textarea
            id='preprossed-data'
            placeholder=''
            className=' min-h-[25vw]'
            data={data}
            onChange={handleOnChange}
          >
            {textArea}
          </Textarea>
          <div className='flex justify-center items-center mt-10 h-[30vh] sm:h-[20vh]'>
            <BlackButton text='Generate User Story' type='submit' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PreproPage;
