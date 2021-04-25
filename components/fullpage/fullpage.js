import React, { useRef, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
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
  const isFirstLoad = useRef(true);
  const animation = fullpage.navigation.animation || `foldOutAnimation`;

  useState(()=>{
    console.log(fullpage.navigation.slug)
  },[])

  return (
    <Slider
      startupScreen={<Startup />}
      startupDelay={1000}
      mobileTouch={false}
      animation={animation}
      className={`awesome-slider ${fullpage.navigation.slug}`}
      onTransitionEnd={() => {
        // HANDLE THE PAGE ELEMENTS ANIMATION ON FIRST TRANSITION END
        if (isFirstLoad.current) {
          document.querySelector("body").classList.add("animated");
          document.querySelector("body").classList.add("visible");
        }
      }}
      onTransitionStart={() => {
        // HANDLE THE PAGE ELEMENTS ANIMATION ON FIRST TRANSITION START
        if (isFirstLoad.current) {
          document.querySelector("body").classList.remove("animated");
          document.querySelector("body").classList.remove("visible");
        }
      }}
      media={media}
    />
  );
});
