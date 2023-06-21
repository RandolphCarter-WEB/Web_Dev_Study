import './App.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function App() {

  // const eventOnClick = () => {
  //   console.log("Event Click!!");
  // };
  //
  // const divOnClick = () => {
  //   console.log("Something Click!!");
  // };

  return (
    <div id="mainContainer">
      {/*<Calendar events={events} onClick={divOnClick} onClickEvent={eventOnClick} />*/}
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        intiaView="dayGridPlugin"
      />
    </div>
  );
}

export default App;