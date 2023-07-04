import React, { useContext } from "react";
import {
  Cell,
  Item,
  ItemInactive,
  Model,
  Row,
  Wrapper,
} from "./content.styled";
import { CalendarContext } from "../../Context/calendarContext.provider";

const Days = ["Su", "Mo", "Tu", "we", "Th", "Fr", "Sa"];

function Content() {
  const { datesOfLastMonth, datesOfMonth, datesOfNextMonth, isToday } =
    useContext(CalendarContext);

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
              <Wrapper>
                <ItemInactive>{item.dddd}</ItemInactive>
              </Wrapper>
            </Cell>
          );
        })}

        {datesOfMonth.map((item: any, i: number) => {
          return (
            <Cell>
              <Wrapper
                className={
                  item.yyyy === isToday.yyyy &&
                  item.mmmm === isToday.mmmm &&
                  item.dddd === isToday.dddd
                    ? "current"
                    : ""
                }
              >
                <Item>{item.dddd}</Item>
              </Wrapper>
            </Cell>
          );
        })}

        {datesOfNextMonth.map((item: any, i: number) => {
          return (
            <Cell>
              <Wrapper>
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
