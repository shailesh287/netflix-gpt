import { PiPlayFill } from "react-icons/pi";
import { BsFillInfoCircleFill } from "react-icons/bs";
type VideoTitleProps = {
  title: string;
  overview: string;
};

const VideoTitle = (props: VideoTitleProps) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{props.title}</h1>
      <p className="hidden md:hidden lg:inline-block   py-6 text-lg w-2/5">
        {props.overview}
      </p>
      <div className="my-4 md:my-6 lg:m-0 flex">
        <button className="flex items-center gap-2 bg-white hover:bg-opacity-80 text-black py-1 md:py-2 px-3 md:px-4 text-xl font-semibold rounded-lg">
          <PiPlayFill /> <span>Play</span>
        </button>
        <button className="hidden md:flex items-center gap-2 bg-gray-500 hover:bg-opacity-80 mx-2 text-white py-1 md:py-2 px-3 md:px-4 text-xl font-semibold bg-opacity-50 rounded-lg">
          <BsFillInfoCircleFill />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
