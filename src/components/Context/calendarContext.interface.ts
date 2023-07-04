import { ReactNode } from "react";

export interface CalendarContextType {
  currYear: number;
  setCurrYear: any;
  currMonth: number;
  setCurrMonth: any;
  Months: string[];
  datesOfLastMonth: number[];
  datesOfMonth: number[];
  datesOfNextMonth: number[];
}

export interface CalendarContextProviderType {
  children: ReactNode;
}
