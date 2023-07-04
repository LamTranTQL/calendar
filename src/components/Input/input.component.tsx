import React from "react";
import { IconCalendar, Label, Model, Select, Wrapper } from "./input.styled";
import IconCalendarSVG from "./Calendar.svg";

function Input() {
  const handleClick = () => {
    console.log("ok");
  };
  return (
    <Model>
      <Label>Single Date Picker</Label>
      <Wrapper onClick={handleClick}>
        <Select placeholder="Select date" disabled />
        <IconCalendar src={IconCalendarSVG} />
      </Wrapper>
    </Model>
  );
}

export default Input;
