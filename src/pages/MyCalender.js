import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import '../MyCalender.css'
import * as events from "events";
class MyCalendar extends Component {

    constructor(props){
        super(props);
    }

    dateClick=(info)=>{
    const clickedDate = info.dateStr;
    const clickedEvent = this.props.events.find(event => event.date === clickedDate);

    if (clickedEvent) {
        alert(`일정 : ${clickedEvent.title}\n${clickedEvent.date}`);
    } else {
        alert(info.dateStr);
    }
}
    render() {
        return (
          <div className="MyCalender">
              <div style={{
                  margin: 50,
                  marginLeft:300,
                    }}>
            <FullCalendar
                 plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                    initialView={'dayGridMonth'}
                    headerToolbar={
                        {
                            start: 'prev,today',
                            center: 'title',
                            end: 'next'
                        }
                    }
                    height={"70vh"}
                dateClick = {this.dateClick}
                 events={this.props.events}
                // events={[
                //     { title: 'event 1', date: '2023-09-01' },
                //     { title: 'event 2', date: '2023-09-02' }
                // ]}
            />
              </div>
          </div>
        );
    }
}

export default MyCalendar;