import { useGSAP } from "@gsap/react";
import { chipImg, frameImg, frameVideo } from "../utils";
import gsap from "gsap";
import { useRef } from "react";
import { animatewithGsap } from "../utils/animation";

const HowItWorks = () => {
  const videoRef = useRef(null);
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
    animatewithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img
            src={chipImg}
            alt="Apple chip"
            width={180}
            height={180}
            className="pointer-events-none"
          />
        </div>
        <div className="flex flex-col items-centerr">
          <h2 className="hiw-title">
            A17 Pro chip <br />A moster win for gaming
          </h2>
          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                className="bg-transparent relative z-10 pointer-events-none"
                src={frameImg}
                alt="frame"
              />
            </div>
            <div className="hiw-video">
              <video
                autoPlay
                className="pointer-events-none"
                playsInline
                muted
                preload="none"
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>
        <div className="hiw-text-container xl:px-28 sm:px-0">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iphone chip that delivers our{" "}
              <span className="text-white">best graphic performace by far</span>
              .
            </p>
            <p className="hiw-text g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive{" "}
              </span>
              with incredible detailed environments and characters.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
      <div className="mt-20"></div>
    </section>
  );
};

export default HowItWorks;
