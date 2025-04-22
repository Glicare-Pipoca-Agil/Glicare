import { ReactNode } from "react";

export default interface ButtonProps {
  children: ReactNode;
  classAttributes?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}