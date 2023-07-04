import "./App.css";
import { CalendarContextProvider } from "./components/Context/calendarContext.provider";
import DatePickerMenu from "./components/DatePickerMenu/datePickerMenu.component";

function App() {
  return (
    <div className="App">
      <CalendarContextProvider>
        <DatePickerMenu />
      </CalendarContextProvider>
    </div>
  );
}

export default App;
