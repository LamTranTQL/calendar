import React from "react";
import { ButtonModel } from "./buttonText.styled";

function ButtonText(props: any) {
  return <ButtonModel>{props.children}</ButtonModel>;
}

export default ButtonText;
