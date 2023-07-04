import React from "react";
import { Bottom, Model } from "./datePickerMenu.styled";
import Checkbox from "../Checkbox/checkbox.component";
import Header from "./Header/header.component";
import Content from "./Content/content.component";

function DatePickerMenu() {
  return (
    <Model>
      <Header />
      <Content />
      <Bottom>
        <Checkbox />
      </Bottom>
    </Model>
  );
}

export default DatePickerMenu;
