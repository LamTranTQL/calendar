import "./App.css";
import { CalendarContextProvider } from "./components/Context/calendarContext.provider";
import Input from "./components/Input/input.component";

function App() {
  return (
    <div className="App">
      <CalendarContextProvider>
        <Input />
      </CalendarContextProvider>
    </div>
  );
}

export default App;
