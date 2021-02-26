import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "./styles.css";

function App() {
  const [value, onChange] = useState(new Date());

  console.log(value);

  return (
    <div>
      <DateTimePicker
        onChange={onChange}
        value={value}
        format="dd/MM/yyyy hh:mm:ss"
        className="main"
        calendarClassName='calendar'
      />
    </div>
  );
}

export default App;
