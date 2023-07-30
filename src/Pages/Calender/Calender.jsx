import React from 'react'
import './Calender.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import useCalendar from '../../Store/Celender'
import { createEventId } from '../../DummyData'
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'


const Calender = () => {
  const { currentEvents, setCurrentEvents } = useCalendar()

  const handleEvents = async (events) => {
      await Promise.resolve(setCurrentEvents(events))
  }

  const handleDateSelect = (selectInfo) => {
      let title = prompt('Please enter a title for the event')
      let calendarApi = selectInfo.view.calendar;

      calendarApi.unselect();


      if (title) {
          calendarApi.addEvent({
              id: createEventId(),
              title,
              start: selectInfo.start,
              end: selectInfo.end,
              allDay: selectInfo.allDay
          })
      }
  }

  const handleEventClick = (clickInfo) => {
      if (
          alert('Are you sure you want to delete this event?')

      ) {
          clickInfo.event.remove()
      }
  }
  return (
    <>
     <Topbar />
      <div className="container">
        <Sidebar />
    <div className='calender'>
      <div>
      <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                    headerToolbar={{

                        left: 'prev,next today',
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay"

                    }}

                    allDaySlot={false}
                    initialView="timeGridWeek"
                    slotDuration={"01:00:00"}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={true}
                    nowIndicator={true}
                    initialEvents={currentEvents}
                    eventsSet={handleEvents}
                    select={handleDateSelect}
                    eventClick={handleEventClick}
                />
       </div>
    </div>
    </div>
    </>
  )
}

export default Calender
