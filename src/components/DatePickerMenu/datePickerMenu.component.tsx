import React from "react";
import { Model } from "./datePickerMenu.styled";
// import Checkbox from "../Checkbox/checkbox.component";
import Header from "../Header/header.component";
import Content from "./Content/content.component";

function DatePickerMenu(props: any) {
  return (
    <Model ref={props.ref} {...props}>
      <Header />
      <Content />
      {/* <Bottom>
        <Checkbox />
      </Bottom> */}
    </Model>
  );
}

export default DatePickerMenu;
