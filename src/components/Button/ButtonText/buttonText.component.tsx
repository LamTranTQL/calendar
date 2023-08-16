import React from "react";
import { ButtonModel } from "./buttonText.styled";

interface ButtonTextProps {
  children: string | number;
  onClick?: () => void;
}

function ButtonText(props: ButtonTextProps) {
  return <ButtonModel onClick={props.onClick}>{props.children}</ButtonModel>;
}

export default ButtonText;
