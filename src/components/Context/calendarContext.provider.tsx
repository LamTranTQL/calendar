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
  const [valueSelected, setValueSelected] = useState<string>("");
  const [isOptions, setIsOptions] = useState<boolean>(false);
  const [selectDate, setSelectDate] = useState<any>({
    yyyy: "",
    mmmm: "",
    dddd: "",
  });
  const isToday: any = {
    yyyy: date.getFullYear(),
    mmmm: date.getMonth(),
    dddd: date.getDate(),
  };
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

  const datesOfLastMonth: any[] = [];
  const datesOfMonth: any[] = [];
  const datesOfNextMonth: any[] = [];

  for (let i = firtDayOfMonth; i > 0; i--) {
    let yy: number = currYear;
    let mm: number = currMonth;
    if (currMonth === 0) {
      yy = yy - 1;
      mm = 11;
    } else {
      mm = mm - 1;
    }
    datesOfLastMonth.push({
      yyyy: yy,
      mmmm: mm,
      dddd: lastDayOfLastMonth - i + 1,
    });
  }

  for (let i = 1; i <= datesInMonth; i++) {
    datesOfMonth.push({ yyyy: currYear, mmmm: currMonth, dddd: i });
  }

  if (
    42 -
      (datesOfLastMonth.length +
        datesOfMonth.length +
        datesOfNextMonth.length) >
    7
  ) {
    for (let i = firtDayOfNextMonth; i < 14; i++) {
      let yy: number = currYear;
      let mm: number = currMonth;
      if (currMonth === 11) {
        yy = yy + 1;
        mm = 0;
      } else {
        mm = mm + 1;
      }
      datesOfNextMonth.push({
        yyyy: yy,
        mmmm: mm,
        dddd: i - firtDayOfNextMonth + 1,
      });
    }
  } else {
    for (let i = firtDayOfNextMonth; i < 7; i++) {
      let yy: number = currYear;
      let mm: number = currMonth;
      if (currMonth === 11) {
        yy = yy + 1;
        mm = 0;
      } else {
        mm = mm + 1;
      }
      datesOfNextMonth.push({
        yyyy: yy,
        mmmm: mm,
        dddd: i - firtDayOfNextMonth + 1,
      });
    }
  }

  const value = {
    currYear,
    setCurrYear,
    currMonth,
    setCurrMonth,
    Months,
    datesOfMonth,
    datesOfLastMonth,
    datesOfNextMonth,
    isToday,
    valueSelected,
    setValueSelected,
    isOptions,
    setIsOptions,
    selectDate,
    setSelectDate,
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};
