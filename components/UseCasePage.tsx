import Image from "next/image";

const UseCasePage = () => {
  return (
    <div className='bg-black min-h-screen bg-dot-white/[0.2] pt-10 px-10'>
      <div className='mx-auto min-h-[90vh] p-8 w-3/4 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]'>
        <div className='flex justify-center items-center'>
          <Image
            src={"/mockusecase.png"}
            alt=''
            width={500}
            height={500}
            className='max-h-[80vh] max-w-[80vh]'
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default UseCasePage;
