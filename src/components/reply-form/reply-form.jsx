import React from "react";
import "./reply-form.scss";

const ReplyForm = () => {
  return (
    <section id="reply-form">
      <h3>Leave a reply</h3>
      <form>
        <div className="info">
          <input
            type="text"
            placeholder="Your Name (Required)"
            name="nickname"
            aria-label="enter name"
          />
          <input
            type="email"
            placeholder="Your E-mail Address"
            name="email"
            aria-label="enter email"
          />
        </div>

        <textarea
          placeholder="Message (optional)"
          name="message"
          id="message"
          cols="30"
          rows="10"
          aria-label="enter message"
        ></textarea>
        <button type="submit">SUBMIT</button>
      </form>
    </section>
  );
};

export default ReplyForm;
