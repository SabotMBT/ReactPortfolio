import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Me!</h1>
      <div className="row g-3">
        <div className="input-group col-md-8">
          <select
            className="form-select titleSel"
            id="validationTooltip04"
            required
          >
            <option disabled value="">
              Title
            </option>
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Revd.</option>
            <option>Pr.</option>
            <option>Br.</option>
            <option>Fr.</option>
            <option>Sr.</option>
            <option>Dr.</option>
            <option>Prof.</option>
          </select>
          <span className="input-group-text">First and Last name</span>
          <input
            type="text"
            aria-label="First name"
            className="form-control"
            required
          ></input>
          <input
            type="text"
            aria-label="Last name"
            className="form-control"
            required
          ></input>
        </div>
        <div className="input-group col-md-8">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Company or Organization
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Company or Organization name input"
            aria-describedby="inputGroup-sizing-default"
            required
          ></input>
        </div>
        <div className="input-group col-md-8">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Email Address
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Email Address input"
            aria-describedby="inputGroup-sizing-default"
            id="validationDefault03"
            required
          ></input>
        </div>
        <div className="input-group">
          <span className="input-group-text">Comments</span>
          <textarea
            className="form-control"
            id="validationDefault05"
            aria-label="Comments"
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
}
