import React, { useContext } from "react";
import {
  Cell,
  Current,
  Item,
  ItemInactive,
  Model,
  Row,
  Selected,
  Wrapper,
} from "./content.styled";
import { CalendarContext } from "../../Context/calendarContext.provider";

const Days = ["Su", "Mo", "Tu", "we", "Th", "Fr", "Sa"];

function Content() {
  const {
    currMonth,
    setCurrMonth,
    datesOfLastMonth,
    datesOfMonth,
    datesOfNextMonth,
    isToday,
    setValueSelected,
    setIsOptions,
    selectDate,
    setSelectDate,
  } = useContext(CalendarContext);

  const handleClick = (value: any) => {
    if (value.mmmm !== currMonth) {
      setCurrMonth(value.mmmm);
    }
    let valueSelected = `${value.dddd < 10 ? "0" + value.dddd : value.dddd}/${
      value.mmmm < 9 ? "0" + (value.mmmm + 1) : value.mmmm + 1
    }/${value.yyyy}`;
    setValueSelected(valueSelected);
    setIsOptions(false);
    setSelectDate(value);
  };

  return (
    <Model>
      <Row>
        {Days.map((item: any, i: number) => {
          return (
            <Cell key={i}>
              <Wrapper>
                <Item>{item}</Item>
              </Wrapper>
            </Cell>
          );
        })}
      </Row>

      <Row>
        {datesOfLastMonth.map((item: any, i: number) => {
          return (
            <Cell>
              <Wrapper onClick={() => handleClick(item)}>
                <ItemInactive>{item.dddd}</ItemInactive>
              </Wrapper>
            </Cell>
          );
        })}

        {datesOfMonth.map((item: any, i: number) => {
          if (
            item.yyyy === isToday.yyyy &&
            item.mmmm === isToday.mmmm &&
            item.dddd === isToday.dddd
          ) {
            return (
              <Cell>
                <Current onClick={() => handleClick(item)}>
                  <Item>{item.dddd}</Item>
                </Current>
              </Cell>
            );
          } else if (
            item.yyyy === selectDate.yyyy &&
            item.mmmm === selectDate.mmmm &&
            item.dddd === selectDate.dddd
          ) {
            return (
              <Cell>
                <Selected onClick={() => handleClick(item)}>
                  <Item style={{ color: "#ffffff" }}>{item.dddd}</Item>
                </Selected>
              </Cell>
            );
          } else {
            return (
              <Cell>
                <Wrapper onClick={() => handleClick(item)}>
                  <Item>{item.dddd}</Item>
                </Wrapper>
              </Cell>
            );
          }
        })}

        {datesOfNextMonth.map((item: any, i: number) => {
          return (
            <Cell>
              <Wrapper onClick={() => handleClick(item)}>
                <ItemInactive>{item.dddd}</ItemInactive>
              </Wrapper>
            </Cell>
          );
        })}
      </Row>
    </Model>
  );
}

export default Content;
