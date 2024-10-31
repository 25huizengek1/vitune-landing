import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const HeroParallax = ({ data }: { data: string[] }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const allScreenshots = [];

  while (allScreenshots.length < 15) {
    if (data[allScreenshots.length]) {
      allScreenshots.push(data[allScreenshots.length]);
    } else {
      allScreenshots.push(...data);
    }
  }

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [0, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse mb-20">
          {allScreenshots.map((data) => (
            <Card data={data} translate={translateX} key={Math.random()} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20">
          {allScreenshots.map((data) => (
            <Card
              data={data}
              translate={translateXReverse}
              key={Math.random()}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <section className="body-font">
      <div className="container mx-auto flex px-5 items-center justify-center flex-col">
        <img
          draggable={false}
          onContextMenu={() => false}
          className="lg:w-1/6 md:w-2/6 w-4/6 mb-10 object-cover object-center animate-jiggle rounded-[22.5%]"
          alt="hero"
          src="https://raw.githubusercontent.com/25huizengek1/ViTune/master/app/src/main/ic_launcher-playstore.png"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="text-2xl text-center md:text-6xl font-bold text-white">
            Seamless Music Streaming, Personalized for You
          </h1>
          <p className="mb-8 w-full text-center leading-relaxed text-base md:text-xl mt-8 text-neutral-200">
            ViTune brings you a seamless music streaming experience with access
            to nearly any song or video from YouTube Music, offline playback,
            and personalized playlists. Discover new tracks by mood or genre,
            manage your playlists with cloud sync, and enjoy a sleek,
            customizable interface—all in a lightweight app designed for music
            lovers.
          </p>
          <div className="flex justify-center">{/* @todo  */}</div>
        </div>
      </div>
    </section>
  );
};

export const Card = ({
  data,
  translate,
}: {
  data: string;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
      }}
      key={Math.random()}
      className="group h-96 w-[15rem] relative flex-shrink-0"
    >
      <div className="block group-hover:shadow-2xl h-full group-hover:opacity-100">
        <img
          src={data}
          className="object-cover rounded-2xl object-left-top absolute h-full !aspect-[9/16] inset-0"
          alt={"Screenshot"}
        />
      </div>
    </motion.div>
  );
};
export default HeroParallax;
