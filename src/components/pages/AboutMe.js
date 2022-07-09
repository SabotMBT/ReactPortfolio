import React from "react";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <div className="d-inline-flex ">
        <div>
          <img
            src={process.env.PUBLIC_URL + "mecropped200x200.jpg"}
            alt="JD Rogers"
          />
        </div>
        <div>
          <p className="text-wrap">
            Born in Omaha, Nebraska, in 1988, Joel has always been a precocious
            child. His love of electronics came from his fascination with video
            games from an early age. From there, he began building his own
            desktops in High School, and became active in the modding community
            shortly thereafter.
          </p>
          <p className="text-wrap">
            After 10 years of experience as a truck driver, Joel elected to take
            his enthusiasm for electronics and programming and turn it into a
            career. He attended the University of Denver Coding Bootcamp, where
            he learned full-stack web development. at.
          </p>
        </div>
      </div>
    </div>
  );
}
