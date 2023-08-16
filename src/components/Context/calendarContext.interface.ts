import { ReactNode } from "react";

export interface CalendarContextType {
  currYear: number;
  setCurrYear: any;
  currMonth: number;
  setCurrMonth: any;
  Months: string[];
  datesOfLastMonth: any[];
  datesOfMonth: any[];
  datesOfNextMonth: any[];
  isToday: any;
  valueSelected: string;
  setValueSelected: any;
  isOptions: boolean;
  setIsOptions: any;
  selectDate: any;
  setSelectDate: any;
  isMonthOptions: boolean;
  setIsMonthOptions: any;
}

export interface CalendarContextProviderType {
  children: ReactNode;
}

// custom interface
// interface yymmddType {
//   yyyy: number;
//   mm: number;
//   dd: number;
// }

// interface isOptionsType {
//   isDateOptions: boolean;
//   isMonthOptions: boolean;
//   isYearOptions: boolean;
// }

// interface ContextInterface {
//   currentDates: yymmddType;
//   setCurrentDates: any;
//   toDay: yymmddType;
//   isOptions: isOptionsType;
// }
