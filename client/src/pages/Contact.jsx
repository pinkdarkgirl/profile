import { useState } from "react";

// Contact component allowing users to contact me
function Contact() {
  // State for form data, form submission status, and submission error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  // State to toggle between showing the form and feedback messages
  const [showForm, setShowForm] = useState(true);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit form data to the server
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Form submitted successfully
        console.log("Form submitted successfully");
        setIsFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setShowForm(false);
      } else {
        // Form submission failed
        console.error("Form submission failed:", responseData.message);
        setIsFormSubmitted(false);
        setSubmissionError(responseData.message);
        setShowForm(false);
      }
    } catch (error) {
      // Error submitting form
      console.error("Error submitting form:", error.message);
      setIsFormSubmitted(false);
      setSubmissionError("An error occurred while submitting the form.");
    }
  };

  // Handle going back to the form when the back button is clicked
  const handleBack = () => {
    setShowForm(true);
    setIsFormSubmitted(false);
    setSubmissionError(false);
  };

  return (
    <>
      <div
        className={`contact ${
          isFormSubmitted || submissionError ? "feedback" : ""
        }`}
      >
        <div
          id="contact"
          className={`contact-container ${
            isFormSubmitted || submissionError ? "feedback" : ""
          }`}
        >
          {showForm && (
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <h1>Connect with me!</h1>
                <div className="contact-item">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-item-input"
                  />
                </div>
                <div className="contact-item">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-item-input"
                  />
                </div>
                <div className="contact-item">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-item-input"
                  ></textarea>
                </div>
                <button className="btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          )}

          {isFormSubmitted && !submissionError && (
            // Success feedback section
            <div className="form-feedback">
              <button onClick={handleBack}>&larr;</button>
              <p>
                Thank you for reaching out! 💫 Your message has been sent, and I
                will get back to you as soon as possible. In the meantime, feel
                free to explore more of the portfolio. Have a great day! 😊🌸
              </p>
            </div>
          )}

          {submissionError && (
            // Error feedback section
            <div className="form-feedback">
              <button onClick={handleBack}>&larr;</button>
              <p>
                Oh no! 🫣 It seems like there is a glitch in the matrix.
                Don&apos;t worry, though! Please try again a little later, and
                I&apos;ll make sure your message gets through. Thanks for your
                patience! 💕✨
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;
