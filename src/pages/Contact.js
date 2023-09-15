import "../Contact.css";
import "../CV.css";
import "animate.css";

export const Contact = () => {
  return (
    <div className="page-wrapper">
      <div className="page-title-wrapper">
        <h1 className="page-title">
          <span className="bold-text animate__animated animate__backInLeft">
            Contact
          </span>
        </h1>
      </div>
      <div className="page-subsection-wrapper">
        <h2 className="page-summary-title">
          Get <span className="bold-text">in Touch</span>
        </h2>
        <p className="page-summary-text">
          I am open for work and I eagerly await my next challenge in the world
          of software engineering. It would be great if you can be in touch.
        </p>
        <div className="contact-info-wrapper">
          <p className="contact-info">
            Email:{" "}
            <span className="bold-text">karleenmsrichards@gmail.com</span>
          </p>
        </div>
        <form>
          <legend className="page-summary-text">Or message me here:</legend>

          <div className="contact-form-section">
            <label className="page-summary-text" htmlFor="contact-name-input">
              Name
            </label>
            <input type="text" id="contact-name-input" />
          </div>

          <div className="contact-form-section">
            <label className="page-summary-text" htmlFor="contact-email-input">
              Email <span className="contact-form-star">*</span>
            </label>
            <input type="email" id="contact-email-input" />
          </div>

          <div className="contact-form-section">
            <label
              className="page-summary-text"
              htmlFor="contact-message-input"
            >
              Message
            </label>
            <input type="email" id="contact-message-input" />
          </div>
          <button className="highlight-bg-btn contact-form-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};
