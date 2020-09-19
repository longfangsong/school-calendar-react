import React, {CSSProperties, useEffect, useState} from "react";
import "./Calendar.css";
import {
    addDays,
    subDays,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameDay,
    isSameMonth,
    format
} from "date-fns";
import Day, {Dot} from "./Day/Day";
import Left from "../img/chevron-left.svg";
import Right from "../img/chevron-right.svg";


export default function Calendar(props: {
    date: Date,
    onSelect?: (date: Date) => void,
    events: (date: Date) => Array<Dot> | string,
    className?: string,
    style?: CSSProperties
}) {
    const dayNames = ['日', '一', '二', '三', '四', '五', '六'];
    const [displayingDate, setDisplayingDate] = useState(props.date);

    useEffect(() => {
        setDisplayingDate(props.date);
    }, [props.date]);

    return (
        <div className={"calendar " + props.className || ""} style={props.style}>
            <div className="calendar-header">
                <button onClick={() => setDisplayingDate(subDays(startOfMonth(displayingDate), 1))}>
                    <Left/>
                </button>
                <div>{format(displayingDate, 'yyyy 年 MM 月')}</div>
                <button onClick={() => setDisplayingDate(addDays(endOfMonth(displayingDate), 1))}>
                    <Right/>
                </button>
            </div>
            <div className="calendar-body">
                <div className="day-names">
                    {dayNames.map(it => <span key={it} className="day-name">{it}</span>)}
                </div>
                <div className="days">
                    {
                        eachDayOfInterval({
                            start: startOfWeek(startOfMonth(displayingDate)),
                            end: endOfWeek(endOfMonth(displayingDate))
                        }).map(it => <Day
                            key={it.toString()}
                            date={it}
                            style={{opacity: isSameMonth(it, displayingDate) ? 1 : 0.2}}
                            className={isSameDay(it, props.date) ? "selected" : ""}
                            events={props.events(it)}
                            onClick={() => props.onSelect(it)}
                        />)
                    }
                </div>
            </div>
        </div>
    );
}