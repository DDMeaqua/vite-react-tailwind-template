import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";

function App() {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (typingDone) {
      console.log("Typing finished!");
    }
  }, [typingDone]);

  return (
    <div className="bg-black w-full h-screen flex">
      <div className="bg-purple-900 relative hidden flex-1 flex-col justify-center px-5 pt-8 text-[#FE7600] dark:text-[#D292FF] md:flex md:px-6 md:py-[22px] lg:px-8">
        <div className="flex flex-col text-[32px] leading-[1.2] md:text-[40px]">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Build GPTs in Minutes, No Coding Required")
                .pauseFor(1500)
                .callFunction(() => {
                  setTypingDone(true);
                })
                .start();
            }}
            options={{
              loop: false,
              delay: 50,
              deleteSpeed: Infinity,
            }}
          />
        </div>
      </div>
      <div className="relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6"></div>
    </div>
  );
}

export default App;
