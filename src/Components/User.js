import React, { useState } from "react";
import { Add } from "../Redux/Action/index";
import { useDispatch } from "react-redux";
import "./user.css";
function User() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [time, setTime] = useState("12:30 - 2:30");
  const [book, setbook] = useState(false);
  const dispatch= useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    setbook(true);
    dispatch(Add(name,date,to,from,time));
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  }
  const print = () => {
    setbook(false);
    setName("");
    setDate("");
    setTo("");
    setFrom("");
    setTime("12:30 - 2:30")
  };
  function Reciept() {
    if (book) {
      return (
        <>
          {" "}
          <div className="container receipt">
            <table className="table table-dark">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">From</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{name}</th>
                  <td>{date}</td>
                  <td>{from}</td>
                  <td>{to}</td>
                  <td>{time}</td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-primary" onClick={() => print()}>
              Print Reciept
            </button>
          </div>
        </>
      );
    }
  }
  return (
    <>
      <div className="container">
        <h1>User page</h1>
        <div className="py-5">
          <form>
            <div class="px-5 row form-group">
              <label className=" col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="form-control form-control-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div class="px-5 row form-group">
              <label className=" col-sm-2 col-form-label">Date</label>
              <div className="col-sm-10">
                <input
                  type="date"
                  name="date"
                  required
                  className="form-control form-control-sm"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div class="px-5 row form-group">
              <label className=" col-sm-2 col-form-label">From </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="from"
                  className="form-control form-control-sm"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
            </div>
            <div class="px-5 row form-group">
              <label className=" col-sm-2 col-form-label">Destination</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="to"
                  className="form-control form-control-sm"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>
            </div>
            <div class="px-5 row form-group">
              <label className=" col-sm-2 col-form-label">Time</label>
              <div className="col-sm-10">
                <select
                  class="form-control"
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option>12:30 - 2:30</option>
                  <option>12:30 - 2:30</option>
                  <option>2:30 - 4:30</option>
                  <option>4:30 - 6:30</option>
                  <option>6:30 - 8:30</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => handleSubmit(e)}
            >
              Book Tickets
            </button>
          </form>
          {Reciept()}
        </div>
      </div>
    </>
  );
}

export default User;
