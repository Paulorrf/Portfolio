import React, { FC } from "react";
import { Btn } from "./Button.style";

interface BtnProps {
  children: string;
  type?: string;
}

const Button: FC<BtnProps> = ({ children, type = "primary" }) => {
  return <Btn btnType={type}>{children}</Btn>;
};

export default Button;
