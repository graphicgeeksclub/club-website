import useIntroductionAnimation from "@/animations/useIntroductionAnimation";
import { introCardData } from "@/data/introCards";

const IntroSection = () => {
  useIntroductionAnimation();
 
  return (
    <section id="intro" className="intro-section min-h-screen w-full bg-[#487BCA] dark:bg-[#111] text-center py-[5rem] pb-[10rem] overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold mt-2 pb-4 text-white dark:gradient-text">
        Welcome to Graphic Geeks
      </h2>
      <p className="w-[90%] lg:w-[70%] mx-auto text-sm lg:text-lg lg:mt-6 text-white">
        We are the premier technology club of Graphic Era College, fostering
        innovation, creativity, and technical excellence among students. Our
        mission is to bridge the gap between theoretical knowledge and practical
        application.
      </p>2

      <div className="intro-card-wrapper mt-4 relative text-white">
        {introCardData.map((card) => (
          <div
            key={card.id}
            className="intro-card h-screen w-full mx-auto rounded-md bg-cover bg-center sticky top-0"
          >
            <div
              className="h-full w-full absolute z-[1] bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: `url(${card.img})` }}
            ></div>

            <div className="h-full w-full absolute z-[1] bg-black/60"></div>

            <div className="intro-text-box h-full w-full flex flex-col items-center justify-center gap-10 relative z-[2]">
              <h3 className="text-6xl font-semibold">{card.title}</h3>
              <p className="text-xl w-[80%]">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntroSection;
