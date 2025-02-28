import React from "react";
import { CustomArrowProps } from "react-slick";
import IconArrowLeft from "@/public/svg/icon-arrow-left";

const ArrowPrev = ({ onClick }: CustomArrowProps) => (
  <button 
    onClick={onClick} 
    className="slick-arrow absolute top-1/2 left-[-50px] transform -translate-y-1/2 z-10"
  >
    <IconArrowLeft />
  </button>
);

export default ArrowPrev;