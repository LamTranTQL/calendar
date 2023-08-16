import React, { useContext } from "react";
import { Model } from "../../DatePickerMenu/datePickerMenu.styled";
import Header from "../../Header/header.component";
import { BodyModel, Cell, Item, ItemText } from "./monthOptions.styled";
import { CalendarContext } from "../../Context/calendarContext.provider";

function MonthOptions(props: any) {
  const { Months, setCurrMonth, setIsOptions, setIsMonthOptions } =
    useContext(CalendarContext);

  const handleClick = (i: number) => {
    setCurrMonth(i);
    setIsOptions(true);
    setIsMonthOptions(false);
  };

  return (
    <Model {...props}>
      <Header />
      <BodyModel>
        {Months.map((value: string, i: number) => {
          return (
            <Cell>
              <Item onClick={() => handleClick(i)}>
                <ItemText>{value}</ItemText>
              </Item>
            </Cell>
          );
        })}
      </BodyModel>
    </Model>
  );
}

export default MonthOptions;
