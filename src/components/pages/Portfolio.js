import React from "react";

export default function Portfolio() {
  return (
    <div className="brassborder darkbg p-2 shadow">
      <h1>Portfolio Page</h1>
      <div className="cardcontainer d-flex flex-wrap justify-content-evenly">
        <div className="cstmCard card m-5 p-2" style={{ width: "18rem" }}>
          <img
            src={process.env.PUBLIC_URL + "BachUp.png"}
            alt="Bach That Thang Up"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Bach That Thang Up!</h5>
            <p className="card-text">
              An app to search for Artists, get a list of Albums, Top Tracks,
              and future Events.
            </p>
            <a
              href="https://sabotmbt.github.io/ClassProject1/"
              className="btn btn-primary"
            >
              Deployed Site
            </a>
          </div>
        </div>
        <div className="cstmCard card m-5 p-2" style={{ width: "18rem" }}>
          <img
            src={process.env.PUBLIC_URL + "techblog.png"}
            alt="Tech Blog"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Tech Blog</h5>
            <p className="card-text">
              A simple example of a live blog, with users, authorization
              functionality, and short 'blog' posting.
            </p>
            <a
              href="https://classtechblog.herokuapp.com/"
              className="btn btn-primary"
            >
              Deployed Site
            </a>
          </div>
        </div>
        <div className="cstmCard card m-5 p-2" style={{ width: "18rem" }}>
          <img
            src={process.env.PUBLIC_URL + "flores-rosa-emilia.png"}
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Ecommerce Site</h5>
            <p className="card-text">
              An Ecommerce site, including items for sale, user accounts,
              reviews, and a shopping cart.
            </p>
            <a
              href="https://flores-rosa-emilia.herokuapp.com/"
              className="btn btn-primary"
            >
              Deployed Site
            </a>
          </div>
        </div>
        <div className="cstmCard card m-5 p-2" style={{ width: "18rem" }}>
          <img src={process.env.PUBLIC_URL + "notetaker.png"} alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Note Taker</h5>
            <p className="card-text">
              A simple app that allows a user to take quick notes. The data
              persists across sessions and devices.
            </p>
            <a
              href="https://mod11chalnotetaker.herokuapp.com/notes"
              className="btn btn-primary"
            >
              Deployed Site
            </a>
          </div>
        </div>
        <div className="cstmCard card m-5 p-2" style={{ width: "18rem" }}>
          <img src={process.env.PUBLIC_URL + "jate.png"} alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Just Another Text Editor</h5>
            <p className="card-text">
              A lightweight Progressive Web Application for writing code on the
              go.
            </p>
            <a
              href="https://mod19chaljate.herokuapp.com/"
              className="btn btn-primary"
            >
              Deployed Site
            </a>
          </div>
        </div>
        <div className="cstmCard card m-5 p-2" style={{ width: "18rem" }}>
          <img src={process.env.PUBLIC_URL + "Weather.png"} alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Weather</h5>
            <p className="card-text">
              A simple Weather app that searches for cities by name, saves
              previously searched cities, queries a weather API by city name,
              and displays weather information for that city.
            </p>
            <a
              href="https://sabotmbt.github.io/Mod6ChalWeather/"
              className="btn btn-primary"
            >
              Deployed Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
