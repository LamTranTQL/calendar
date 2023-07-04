import React from "react";
import { BtnContainer, Button, Icon } from "./buttonIcon.styled";

interface ButtonIconProps {
  icon: any;
  onClick?: () => void;
}

function ButtonIcon(props: ButtonIconProps) {
  return (
    <Button onClick={props.onClick}>
      <BtnContainer>
        <Icon src={props.icon} />
      </BtnContainer>
    </Button>
  );
}

export default ButtonIcon;
