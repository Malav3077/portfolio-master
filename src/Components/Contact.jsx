import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("active");
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (key, value) => {
    setFormDetails({ ...formDetails, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      await emailjs.send(
        "service_mk5ackf",
        "template_zkf8nqu",
        {
          name: formDetails.name,
          time: new Date().toLocaleString(),
          message: `${formDetails.message}\n\nReply to: ${formDetails.email}`,
        },
        "ebSomteP99WHVHFrm"
      );
      setButtonText("Send");
      setFormDetails({ name: "", email: "", message: "" });
      setStatus({ success: true, message: "Message sent successfully!" });
    } catch {
      setButtonText("Send");
      setStatus({ success: false, message: "Something went wrong, try again" });
    }
  };

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      {/* Diagonal geometric shapes */}
      <div className="contact-geo-shape contact-geo-1"></div>
      <div className="contact-geo-shape contact-geo-2"></div>

      <div className="contact-split">
        {/* Left side: big heading */}
        <div className="contact-left reveal">
          <div className="contact-left-content">
            <h2 className="contact-title">Conversation<br />comes first</h2>
            <p className="contact-subtitle">That's often where good things begin.</p>
          </div>
        </div>

        {/* Right side: form */}
        <div className="contact-right reveal delay-2">
          <div className="contact-form-wrapper">
            <h3 className="contact-form-title">Open to opportunities</h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label className="contact-label">Name</label>
                <input
                  type="text"
                  className="contact-input"
                  placeholder="How should I call you?"
                  value={formDetails.name}
                  onChange={(e) => onFormUpdate("name", e.target.value)}
                />
              </div>
              <div className="contact-field">
                <label className="contact-label">Email</label>
                <input
                  type="email"
                  className="contact-input"
                  placeholder="Where can I reach you?"
                  value={formDetails.email}
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                />
              </div>
              <div className="contact-field">
                <label className="contact-label">Message</label>
                <textarea
                  className="contact-input"
                  placeholder="Anything you'd like to discuss?"
                  rows={4}
                  value={formDetails.message}
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                />
              </div>
              <button type="submit" className="contact-submit">{buttonText}</button>
              {status.message && (
                <p className={status.success === false ? "danger" : "success"}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
