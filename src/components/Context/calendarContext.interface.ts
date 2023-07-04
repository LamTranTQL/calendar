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
}

export interface CalendarContextProviderType {
  children: ReactNode;
}
