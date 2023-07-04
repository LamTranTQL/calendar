import React, { Fragment, useContext, useRef, useState } from "react";
import { IconCalendar, Label, Model, Select, Wrapper } from "./input.styled";
import IconCalendarSVG from "./Calendar.svg";
import { createPortal } from "react-dom";
import DatePickerMenu from "../DatePickerMenu/datePickerMenu.component";
import { CalendarContext } from "../Context/calendarContext.provider";

const portalRoot = document.getElementById("portal") as HTMLElement;

function Input() {
  const { valueSelected, isOptions, setIsOptions } =
    useContext(CalendarContext);

  const [coords, setCoords] = useState<any>({
    x: 0,
    y: 0,
    height: 0,
  });

  const selectRef = useRef<HTMLDivElement | null>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    // document.addEventListener("click", handleOutSideClick);

    if (selectRef.current) {
      const clientReact = selectRef.current.getBoundingClientRect();
      setCoords({
        x: clientReact.left,
        y: clientReact.top + window?.scrollY,
        height: clientReact.height,
      });
      setIsOptions(!isOptions);
    }
  };

  // const handleOutSideClick = (event: any) => {
  //   if (selectRef.current) {
  //     if (selectRef && !selectRef.current.contains(event.target)) {
  //       console.log("outside");
  //       setIsOptions(false);
  //     }
  //   }
  // };

  return (
    <Fragment>
      <Model ref={selectRef}>
        <Label>Single Date Picker</Label>
        <Wrapper onClick={handleClick}>
          <Select value={valueSelected} placeholder="Select date" disabled />
          <IconCalendar src={IconCalendarSVG} />
        </Wrapper>
      </Model>

      {isOptions &&
        createPortal(
          <DatePickerMenu
            ref={optionsRef}
            style={{
              left: coords.x,
              top: coords.y + coords.height + 4 + "px",
            }}
          />,
          portalRoot
        )}
    </Fragment>
  );
}

export default Input;
