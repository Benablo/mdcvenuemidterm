import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useParams, Link } from "react-router-dom";

const Venue = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {

        const { venue} = data;

        setVenue(venue);
        setSchedule(data.schedules);
      });
  }, []);
  return (
    <>
      <div className="">
        <div className="container">
          <h1 className="mt-4"> {venue.name}</h1>
          <hr />
          <div className="d-flex justify-content-between">
          <div className="">ID: {venue.id}</div>
          <div className="">Name: {venue.name}</div>
          <div className="">Building: {venue.building}</div>
          <div className="">Capacity: {venue.capacity}</div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="">Schedules</h2>
            <Link to="/" className="btn btn-light btn-outline-secondary mb-5 mt-5 float-end"><MdOutlineKeyboardBackspace/>
            </Link>
          </div>
        <table className="table table-bordered text-center table-striped mb-5">
          <thead >
            <tr className="bg-dark text-light">
              <th className="p-3 col-md-1">ID</th>
              <th className="p-3 col-md-2">Course No.</th>
              <th className="p-3 col-md-4">Description</th>
              <th className="p-3 col-md-2">Teacher</th>
              <th className="p-3 col-md-1">Size</th>
              <th className="p-3 col-md-3">Schedule</th>
              
            </tr>
          </thead>
          <tbody>
            {Object.keys(schedule)?.map((scheds, index) => {
              return (
                <>
                  <tr key={index}>
                    <td className="">{schedule[scheds].id}</td>
                    <td className="">{schedule[scheds].course_no}</td>
                    <td className="">{schedule[scheds].description}</td>
                    <td className="">{schedule[scheds].teacher}</td>
                    <td className="">{schedule[scheds].size}</td>
                    <td className="">{schedule[scheds].schedule}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default Venue;
