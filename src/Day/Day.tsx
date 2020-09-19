import React, {CSSProperties} from "react";
import './Day.css';
import {isSameDay} from 'date-fns';

export interface Dot {
    color: string
}

export default function Day(props: {
    date: Date,
    events: Array<Dot> | string,
    onClick: () => void,
    className?: string,
    style?: CSSProperties
}) {
    return (
        <div className="day-container">
            <div className={`day ${isSameDay(props.date, new Date()) ? "today" : ""} ` + props.className || ""}
                 style={props.style || {}}
                 onClick={props.onClick}>
                <div className="day-number">
                    {props.date.getDate()}
                </div>
                {
                    props.events === undefined || typeof props.events === 'string'
                        ? <div className='event event-text'>{props.events || " "}</div>
                        : <div className='event event-dots'>
                            {props.events.map((dot, index) => <span className='dot' key={index}
                                                                    style={{background: dot.color}}/>)}
                        </div>
                }
            </div>
        </div>
    );
}