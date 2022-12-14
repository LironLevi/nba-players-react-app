import { useState } from "react";
import { CONTACT_FORM_ENDPOINT } from "../config";

// This is a partially complete contact form, to show the basics of
// React useState to handle form data in a react app, which is a very common
// requirement. Notice how we listen to event handlers like in standard JavaScript
// And then we store our data using useState
// Also notice that useState, when initialized, returns an array of:
// i) the current state
// ii) a function to create a new state
// Pay attention to how both of these are used, as this is a simple example of
// The primary way of managing data/state in React

async function postContactForm(data) {
  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({});
  const [formResponseStatus, setFormResponseStatus] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await postContactForm(formData);
    setFormResponseStatus(response.status);
  }

  function handleChange(event) {
    if (event.target.id === "form-name") {
      const name = event.target.value;
      setFormData(Object.assign(formData, { name }));
    }
    if (event.target.id === "form-email") {
      const email = event.target.value;
      setFormData(Object.assign(formData, { email }));
    }
    if (event.target.id === "form-comment") {
      const comment = event.target.value;
      setFormData(Object.assign(formData, { comment }));
    }
  }

  return (
    <div className="row">
      <div className="item">
        {formResponseStatus ? (
          <div className="content">
            {formResponseStatus === 200
              ? "Thank you! Your message has been sent successfully."
              : "Something went wrong. Failed to send message."}
          </div>
        ) : (
          <div className="content">
            <div>
              Contact us if you found any mistakes or missing data, or if you
              just want to say hello!
            </div>
            <form onSubmit={handleSubmit}>
              <input
                id="form-name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                id="form-email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                id="form-comment"
                placeholder="Your comment"
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
