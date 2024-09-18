"use client";
import SourceCard from "./source-components/SourceCard";
import { BlackButton } from "./ui/buttons";
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { mockdata } from "@/database/mockData";

type SourceType = "x" | "news" | "playstore" | "appstore";

interface DataState {
  x: { loading: boolean; data: null };
  news: { loading: boolean; data: null };
  playstore: { loading: boolean; data: null };
  appstore: { loading: boolean; data: null };
}

const SourcePage = () => {
  const [dataState, setDataState] = useState<DataState>({
    x: { loading: false, data: null },
    news: { loading: false, data: null },
    playstore: { loading: false, data: null },
    appstore: { loading: false, data: null },
  });

  const router = useRouter();

  function handleClick(source: SourceType) {
    // set loading state
    setDataState((prevState) => ({
      ...prevState,
      [source]: { ...prevState[source], loading: true },
    }));
    setTimeout(() => {
      setDataState((prevState) => ({
        ...prevState,
        [source]: { loading: false, data: mockdata[source] },
      }));
    }, 5000);

    // delay for 2 seconds

    // set data
  }
  function handleClickPreprocessing() {
    // get all data that is not null
    // const data = Object.values(dataState).filter((item) => item.data !== null);

    // route to preprocessing page
    router.push("preprocessing");
  }

  // loading state
  // error state
  // success state

  // show data

  return (
    <div className='min-h-screen bg-black bg-dot-white/[0.2] flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center h-full'>
        {" "}
        <h2 className='text-xl text-center sm:text-5xl dark:text-white text-black '>
          Select the source of Requirement
        </h2>
      </div>

      <div className='flex justify-around pt-10 w-full'>
        <SourceCard
          onClick={() => handleClick("x")}
          source='x'
          sourceLogo={<BsTwitterX className='h-20 w-20 dark:text-white' />}
          isScrapping={dataState.x.loading}
          data={dataState.x.data}
        />
        <SourceCard
          onClick={() => handleClick("news")}
          source='news'
          sourceLogo={<ImNewspaper className='h-20 w-20 dark:text-white' />}
          isScrapping={dataState.news.loading}
          data={dataState.news.data}
        />
        <SourceCard
          onClick={() => handleClick("playstore")}
          source='playstore'
          sourceLogo={<FaGooglePlay className='h-20 w-20 dark:text-white' />}
          isScrapping={dataState.playstore.loading}
          data={dataState.playstore.data}
        />
        <SourceCard
          onClick={() => handleClick("appstore")}
          source='appstore'
          sourceLogo={<FaAppStoreIos className='h-20 w-20 dark:text-white' />}
          isScrapping={dataState.appstore.loading}
          data={dataState.appstore.data}
        />
      </div>
      <div className='flex justify-center items-center mt-10 h-[30vh] sm:h-[10vh]'>
        <BlackButton
          text='Do Preprocessing'
          onClick={() => handleClickPreprocessing()}
        />
      </div>
    </div>
  );
};

export default SourcePage;
