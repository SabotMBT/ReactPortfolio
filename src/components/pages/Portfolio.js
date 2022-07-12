import React from "react";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div className="cardcontainer d-flex">
        <div class="card" style="width: 18rem;">
          <img
            src={process.env.PUBLIC_URL + "BachUp.png"}
            class="card-img-top"
            alt="Bach That Thang Up"
          ></img>
          <div class="card-body">
            <h5 class="card-title">Bach That Thang Up!</h5>
            <p class="card-text">
              An app to search for Artists, get a list of Albums, Top Tracks,
              and future Events.
            </p>
            <a
              href="https://sabotmbt.github.io/ClassProject1/"
              class="btn btn-primary"
            >
              Deployed Site
            </a>
          </div>
        </div>
      </div>
      <div className="cardcontainer d-flex">
        <div class="card" style="width: 18rem;">
          <img
            src={process.env.PUBLIC_URL + "techblog.png"}
            class="card-img-top"
            alt="Tech Blog"
          ></img>
          <div class="card-body">
            <h5 class="card-title">Tech Blog</h5>
            <p class="card-text">
              A simple example of a live blog, with users, authorization
              functionality, and short 'blog' posting.
            </p>
            <a
              href="https://classtechblog.herokuapp.com/"
              class="btn btn-primary"
            >
              Deployed Site
            </a>
          </div>
        </div>
      </div>
      <div className="cardcontainer d-flex">
        <div class="card" style="width: 18rem;">
          <img
            src={process.env.PUBLIC_URL + "flores-rosa-emilia.png"}
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body">
            <h5 class="card-title">Ecommerce Site</h5>
            <p class="card-text">
              An Ecommerce site, including items for sale, user accounts,
              reviews, and a shopping cart.
            </p>
            <a
              href="https://flores-rosa-emilia.herokuapp.com/"
              class="btn btn-primary"
            >
              Deployed Site
            </a>
          </div>
        </div>
      </div>
      <div className="cardcontainer d-flex">
        <div class="card" style="width: 18rem;">
          <img
            src={process.env.PUBLIC_URL + "notetaker.png"}
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body">
            <h5 class="card-title">Note Taker</h5>
            <p class="card-text">
              A simple app that allows a user to take quick notes. The data
              persists across sessions and devices.
            </p>
            <a
              href="https://mod11chalnotetaker.herokuapp.com/notes"
              class="btn btn-primary"
            >
              Deployed Site
            </a>
          </div>
        </div>
      </div>
      <div className="cardcontainer d-flex">
        <div class="card" style="width: 18rem;">
          <img
            src={process.env.PUBLIC_URL + "jate.png"}
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body">
            <h5 class="card-title">Just Another Text Editor</h5>
            <p class="card-text">
              A lightweight Progressive Web Application for writing code.
            </p>
            <a
              href="https://mod19chaljate.herokuapp.com/"
              class="btn btn-primary"
            >
              Deployed Site
            </a>
          </div>
        </div>
      </div>
      <div className="cardcontainer d-flex">
        <div class="card" style="width: 18rem;">
          <img
            src={process.env.PUBLIC_URL + "BachUp.png"}
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Deployed Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
