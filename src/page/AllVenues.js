import React, { useEffect, useState } from "react";
import { CgSmileMouthOpen } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import "../css/Venue.css";

const FetchData = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://sis.materdeicollege.com/api/venues")
      .then((res) => res.json())
      .then((res) => setData(res.venues));
  }, []);

  const showVenue = (venue) => {
    navigate(`/api/venue/${venue}`);
  };

  return (
    <>
      <h1 className="">MDC List of Venues</h1>
      <hr />
      <table className="table table-bordered text-center mb-5 table-striped">
        <thead className="">
          <tr className="bg-dark text-light">
            <th className="col-md-1 p-3">ID</th>
            <th className="col-md-2 p-3">Name</th>
            <th className="col-md-3 p-3">Building</th>
            <th className="col-md-1 p-3">Capacity</th>
            <th className="col-md-1 p-3">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {Object.keys(data).map((venue, index) => {
            return (
              <tr key={index}>
                <td>{data[venue].id}</td>
                <td>{data[venue].name}</td>
                <td>{data[venue].building}</td>
                <td>
                  {data[venue].capacity}
                </td>
                <td>
                  <CgSmileMouthOpen className="link"
                      onClick={() => { showVenue(data[venue].id);
                      }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FetchData;
