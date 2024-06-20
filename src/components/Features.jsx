import { useGSAP } from "@gsap/react";
import { animatewithGsap } from "../utils/animation";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { useRef } from "react";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef(null);
  useGSAP(() => {
    animatewithGsap("#features_title", {
      y: 0,
      opacity: 1,
    });
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
    animatewithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        easy: "power1",
      },
      { scrub: 5.5 },
    );
    animatewithGsap(".g_text", {
      y: 0,
      opacity: 1,
      easy: "power2.inOut",
      duration: 1,
    });
  }, []);
  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="mt-32 mb-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">Iphone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold mt-5">
              Forge in titanium.
            </h2>
          </div>
          <div className="flex-center flex-col">
            <div className="relative h-[59vh] w-full flex items-center">
              <video
                preload="none"
                playsInline
                autoPlay={true}
                id="exploreVideo"
                className="size-full object-cover object-center pointer-events-none"
                muted
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container mt-5">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="Explore 1"
                    className="feature-video g_grow pointer-events-none"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="Explore 2"
                    className="feature-video g_grow pointer-events-none"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Iphone 15 pro is{" "}
                    <span className="text-white">
                      the first iphone to feature an aerosapce-grade titanium
                      design{" "}
                    </span>
                    , material using the same alloy that spacecraft use for
                    mission to mars
                  </p>
                </div>
                <div className="flex-1 fflex-center">
                  <p className="feature-text g_text">
                    Titanium has the one of the best strength-to-weight ratios
                    of any metal, making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
