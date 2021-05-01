import React, { useRef, useState } from "react";
import AwesomeSlider from "../AwesomeSlider/src";
import "../AwesomeSlider/dist/custom-animations/cube-animation.css";
import "../AwesomeSlider/dist/custom-animations/fall-animation.css";
import "../AwesomeSlider/dist/custom-animations/fold-out-animation.css";
import "../AwesomeSlider/dist/custom-animations/scale-out-animation.css";
import "../AwesomeSlider/dist/custom-animations/open-animation.css";
import {
  withNavigationHandlers,
  withNavigationContext
} from "react-awesome-slider/dist/navigation";
import { media } from "./media";
import Startup from "../startup/startup";

const Slider = withNavigationHandlers(AwesomeSlider);

const options = [
  {
    label: "Cube Animation",
    value: "cubeAnimation"
  },
  {
    label: "Fall Animation",
    value: "fallAnimation"
  },
  {
    label: "Fold Out Animation",
    value: "foldOutAnimation"
  },
  {
    label: "Open Animation",
    value: "openAnimation"
  },
  {
    label: "Scale Out Animation",
    value: "scaleOutAnimation"
  }
];

export default withNavigationContext(({ fullpage }) => {
  const isLoaded = useRef(true);
  const starterDelay = 1000;
  const animation = fullpage.navigation.animation || `foldOutAnimation`;

  return (
    <Slider
      startupScreen={<Startup />}
      startupDelay={starterDelay}
      mobileTouch={false}
      animation={animation}
      className={`awesome-slider ${fullpage.navigation.slug}`}
      onTransitionEnd={() => {
        // HANDLE THE PAGE ELEMENTS ANIMATION ON FIRST TRANSITION END
        if (isLoaded.current) {
          document.querySelector("body").classList.add("animated");
          document.querySelector("body").classList.add("visible");
        }
      }}
      onTransitionStart={() => {
        // HANDLE THE PAGE ELEMENTS ANIMATION ON FIRST TRANSITION START
        if (isLoaded.current) {
          document.querySelector("body").classList.remove("animated");
          document.querySelector("body").classList.remove("visible");
        }
      }}
      media={media}
    />
  );
});
