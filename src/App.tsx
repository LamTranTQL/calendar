import "./App.css";
import { CalendarContextProvider } from "./components/Context/calendarContext.provider";
import Input from "./components/Input/input.component";
// import MonthOptions from "./components/MenuOptions/MonthOptions/monthOptions.component";

function App() {
  return (
    <div className="App">
      <CalendarContextProvider>
        <Input />
        {/* <MonthOptions /> */}
      </CalendarContextProvider>
    </div>
  );
}

export default App;
