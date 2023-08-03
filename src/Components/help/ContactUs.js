import React from "react";

function ContactUs() {
  return (
    <div>
      <form className="contacts">
        <label>
          <span>Your email</span>
          <input type="email" />
        </label>
        <label>
          <span>Your message</span>
          <textarea name="message" required id=""></textarea>
        </label>
        <div className="btn-submit">
          <button className="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
