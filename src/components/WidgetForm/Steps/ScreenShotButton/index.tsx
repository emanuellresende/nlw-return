import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../../../Loading";

interface ScreenShootButtonProps {
  onScreenShotTook: (screenshot: string | null) => void
  screenshot: string | null
}
export function ScreenShotButton({ onScreenShotTook, screenshot }: ScreenShootButtonProps) {
  const [isTakingScreenShot, setIsTakingScreenShot] = useState(false)
  async function handleTakeScreenShot() {
    setIsTakingScreenShot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png');
    onScreenShotTook(base64image);
    setIsTakingScreenShot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 text-zinc-400 hover:text-zinc-100 transition-colors h-10 rounded-md border-transparent flex justify-end items-end"
        onClick={() => {
          onScreenShotTook(null)
        }}
        style={
          { backgroundImage: `url(${screenshot})` }
        }
      >
        <Trash weight="fill" />
      </button>
    );
  }
  return (

    <button
      type='button'
      className='p-2  rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 hover:bg-brand-300 focus:outline-none bg-zinc-800 border-transparent hover: bg-zinc-700 transition-colors'
      onClick={handleTakeScreenShot}
    >
      {isTakingScreenShot
        ?
        <Loading />
        :
        <Camera className='w-6 h-6 text-zinc-100' />}
    </button>
  );
}


