import useLoadingAnimation from "@/animations/useLoadingAnimation";
import { useState } from "react";

const showWords = [
  "0 bugs club",
  "debugging the matrix",
  "console.log('choosen one')",
];

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  useLoadingAnimation(setLoading);

  if (!loading) return null;

  return (
    <div className="border-[.7rem] fixed z-[1000] inset-0 flex flex-col items-center justify-center bg-black text-green-400 text-xl font-mono">
      <div className="loader-div text-center h-[2rem] w-[50%] mx-auto relative overflow-hidden">
        {showWords.map((word, indx) => {
          return (
            <p
              key={indx}
              className="absolute left-[50%] translate-x-[-50%] translate-y-[2rem] will-change-transform"
            >
              {word}
            </p>
          );
        })}
      </div>

      <div className="loading-percentage text-6xl absolute bottom-2 left-2">
        0%
      </div>
    </div>
  );
};

export default Preloader;
