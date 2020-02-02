import React from "react";
import "./newsletter.scss";

const NewsLetter = () => {
  return (
    <section id="newsletter">
      <h2>Newsletter</h2>
      <p>Join The dandelionite Family! Sign up for our weekly newsletter.</p>
      <form>
        <input
          type="email"
          placeholder="Your E-mail Address"
          name="email"
          aria-label="enter email"
        />
        <button type="submit">GO</button>
      </form>
    </section>
  );
};

export default NewsLetter;
