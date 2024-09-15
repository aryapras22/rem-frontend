import { WhiteButton } from "../ui/buttons";

const SourceCard = ({
  onClick,
  source,
  sourceLogo,
}: {
  onClick: () => void;
  source?: string;
  sourceLogo?: string;
}) => {
  return (
    <div className='max-h-[500px] max-w-sm w-full sm:w-[23%] mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'>
      <div className=' h-80 rounded-xl border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] mb-10'></div>
      <div className='flex justify-end'>
        <WhiteButton text='Get Data' onClick={onClick} />
      </div>
    </div>
  );
};

export default SourceCard;
