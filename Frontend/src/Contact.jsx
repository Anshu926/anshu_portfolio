import { useState } from "react";
import { firestore } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import ContactModel from "./ContactModel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(firestore, "contacts"), {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: serverTimestamp(),
      });

      toast.success("Message sent successfully", {
        position: "top-center",
        autoClose: 2000,
        closeButton: false,
        progressStyle: { background: "#ff2d62" },
        style: {
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(8px)",
          border: "1px solid #ff2d62",
          color: "white",
          boxShadow: "0 0 15px #ff2d62",
        },
      });

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message ❌", {
        position: "top-center",
        autoClose: 2000,
        closeButton: false,
        progressStyle: { background: "#ff2d62" },
        style: {
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(8px)",
          border: "1px solid #ff2d62",
          color: "white",
          boxShadow: "0 0 15px #ff2d62",
        },
      });
    }
  };

  return (
    <div className="contact-wrapper container" id="contact">
      <ToastContainer />

      <h2 className="contact-title">Contact</h2>

      <div className="contact-card row">
        <div className="col-md-6 form-side">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Your Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="col-md-6 model-side d-flex justify-content-center align-items-center">
          <div className="contact-model-box">
            <ContactModel />
          </div>
        </div>
      </div>
    </div>
  );
}
