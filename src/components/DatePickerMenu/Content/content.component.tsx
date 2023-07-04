import React, { useContext } from "react";
import { Cell, Item, ItemDesc, Model, Row, Wrapper } from "./content.styled";
import { CalendarContext } from "../../Context/calendarContext.provider";

const Days = ["Su", "Mo", "Tu", "we", "Th", "Fr", "Sa"];

function Content() {
  const { datesOfLastMonth, datesOfMonth, datesOfNextMonth } =
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
        {datesOfLastMonth.map((item: number, i: number) => {
          return (
            <Cell>
              <Wrapper>
                <ItemDesc>{item}</ItemDesc>
              </Wrapper>
            </Cell>
          );
        })}

        {datesOfMonth.map((item: number, i: number) => {
          return (
            <Cell>
              <Wrapper>
                <Item>{item}</Item>
              </Wrapper>
            </Cell>
          );
        })}

        {datesOfNextMonth.map((item: number, i: number) => {
          return (
            <Cell>
              <Wrapper>
                <ItemDesc>{item}</ItemDesc>
              </Wrapper>
            </Cell>
          );
        })}
      </Row>
    </Model>
  );
}

export default Content;
