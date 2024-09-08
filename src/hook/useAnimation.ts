import React from "react";
import { keyframes } from "@chakra-ui/react";

interface UseAnimationValue {
    shakeAnimation: string;
}

const useAnimation = (): UseAnimationValue => {
  const shakeAnimation = keyframes`
   0% { margin-left: 0; }
   25% { margin-left: 7px }
   50% { margin-left: 0px }
   75% { margin-left: 7px }
   100% { margin-left: 0px }
  `;

  return { 
    shakeAnimation
  }
}

export default useAnimation;