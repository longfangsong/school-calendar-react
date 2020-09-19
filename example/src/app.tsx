import React, {useState} from "react";
import Calendar from "../../src/Calendar";
import {addDays, isSameDay, subDays} from "date-fns";
import {Dot} from "../../src/Day/Day";

function getEvents(date: Date): Array<Dot> | string {
    if (isSameDay(date, addDays(new Date(), 1))) {
        return [{color: "rgb(249, 223, 116)"}, {color: "rgb(255, 102, 153)"}];
    } else if (isSameDay(date, subDays(new Date(), 1))) {
        return "放假";
    }
}

const App = () => {
    let [date, setDate] = useState(new Date());
    return (
        <Calendar date={date}
                  events={getEvents}
                  onSelect={setDate}
                  style={{borderRadius: 4}}
        />
    );
}

export default App;