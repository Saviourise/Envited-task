import React from "react";
import { EventContext } from "../components/EventContext";
import "../styles/Event.css";
import { CgCalendarDates } from "react-icons/cg";
import Cake from "../assets/cake.png";
import { MdOutlineNotListedLocation } from "react-icons/md";

const Event = () => {
  const [EventState] = React.useContext(EventContext);

  React.useEffect(() => {
    var image = document.getElementById("image");
    if (EventState.eventPhoto)
      image.src = URL.createObjectURL(EventState.eventPhoto);
  }, [EventState.eventPhoto]);
  return (
    <div className="EventPageContainer">
      <section className="TextSection">
        <h3>{EventState.eventName ? EventState.eventName : "Birthday Bash"}</h3>
        <p>
          Hosted by{" "}
          <b>{EventState.hostName ? EventState.hostName : "Elysia"}</b>
        </p>
        <div>
          <p>
            <CgCalendarDates />
          </p>
          <p>
            <p>
              {EventState.startDate
                ? new Date(EventState.startDate)
                    .toUTCString()
                    .replace(" GMT", "")
                : new Date("2022-10-07T02:25")
                    .toUTCString()
                    .replace(" GMT", "")}
            </p>
            <p>
              to{" "}
              <b>
                {EventState.endDate
                  ? new Date(EventState.endDate).toUTCString()
                  : new Date("2022-10-25T12:23").toUTCString()}
              </b>
            </p>
          </p>
        </div>
        <div>
          <p>
            <MdOutlineNotListedLocation />
          </p>
          <p>
            <p>
              {EventState.eventLocation
                ? EventState.eventLocation.split(" ")[0]
                : "Street name"}
            </p>
            <p>{EventState.eventLocation}</p>
          </p>
        </div>
      </section>
      <section className="ImageSection">
        <img src={Cake} alt="EventImage" id="image" />
      </section>
    </div>
  );
};

export default Event;
