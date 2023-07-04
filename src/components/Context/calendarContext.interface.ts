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
}

export interface CalendarContextProviderType {
  children: ReactNode;
}
