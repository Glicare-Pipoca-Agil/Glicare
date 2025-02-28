import React from "react";
import { CustomArrowProps } from "react-slick";
import IconArrowRight from "@/public/svg/icon-arrow-right";

const ArrowNext = ({ onClick }: CustomArrowProps) => (
  <button 
    onClick={onClick} 
    className="slick-arrow absolute top-1/2 right-[-50px] transform -translate-y-1/2 z-10"
  >
    <IconArrowRight/>
  </button>
);

export default ArrowNext;