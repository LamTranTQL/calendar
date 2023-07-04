import { createContext, useState } from "react";
import { getDay, getDaysInMonth } from "date-fns";
import {
  CalendarContextType,
  CalendarContextProviderType,
} from "./calendarContext.interface";

export const CalendarContext = createContext({} as CalendarContextType);

export const CalendarContextProvider = ({
  children,
}: CalendarContextProviderType) => {
  let date = new Date();
  const [currYear, setCurrYear] = useState<number>(date.getFullYear());
  const [currMonth, setCurrMonth] = useState<number>(date.getMonth());
  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const datesInMonth = getDaysInMonth(new Date(currYear, currMonth));
  const firtDayOfMonth = getDay(new Date(currYear, currMonth, 1));
  const firtDayOfNextMonth = getDay(new Date(currYear, currMonth + 1, 1));
  const lastDayOfLastMonth = getDaysInMonth(new Date(currYear, currMonth - 1));

  const datesOfLastMonth: number[] = [];
  const datesOfMonth: number[] = [];
  const datesOfNextMonth: number[] = [];

  for (let i = firtDayOfMonth; i > 0; i--) {
    datesOfLastMonth.push(lastDayOfLastMonth - i + 1);
  }

  for (let i = 1; i <= datesInMonth; i++) {
    datesOfMonth.push(i);
  }

  for (let i = firtDayOfNextMonth; i < 7; i++) {
    datesOfNextMonth.push(i - firtDayOfNextMonth + 1);
  }

  if (
    datesOfLastMonth.length + datesOfMonth.length + datesOfNextMonth.length <
    42
  ) {
    let temp = datesOfNextMonth[datesOfNextMonth.length - 1];
    for (let i = 1; i < 8; i++) {
      datesOfNextMonth.push(temp + i);
    }
  }

  console.log(datesOfNextMonth);
  const value = {
    currYear,
    setCurrYear,
    currMonth,
    setCurrMonth,
    Months,
    datesOfMonth,
    datesOfLastMonth,
    datesOfNextMonth,
  };
  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};
