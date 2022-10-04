import React from "react";

export const EventContext = React.createContext();

const EventComponent = (props) => {
  const [EventState, setEventState] = React.useState({
    eventName: "Birthday Bash",
    hostName: "Elysia",
    startDate: "2022-10-07T02:25",
    endDate: "2022-10-25T12:23",
    eventLocation: "Street name, State, Postcode",
    eventPhoto: "",
  });

  return (
    <EventContext.Provider value={[EventState, setEventState]}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventComponent;
