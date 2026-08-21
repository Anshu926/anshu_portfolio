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

  const toastBase = {
    position: "top-right",
    autoClose: 3000,
    closeButton: false,
    hideProgressBar: false,
  };

  const toastStyle = {
    fontFamily: "'Inter', Arial, sans-serif",
    background: "rgba(8, 7, 22, 0.92)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    border: "1px solid rgba(124, 92, 252, 0.55)",
    borderRadius: "14px",
    color: "#e8e4ff",
    boxShadow: "0 0 28px rgba(124, 92, 252, 0.4), 0 8px 32px rgba(0,0,0,0.6)",
    fontSize: "0.92rem",
    fontWeight: 500,
    letterSpacing: "0.2px",
    padding: "14px 20px",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("✦ Sending message...", {
      ...toastBase,
      style: toastStyle,
    });

    try {
      await addDoc(collection(firestore, "contacts"), {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: serverTimestamp(),
      });

      toast.update(toastId, {
        render: "✦ Message sent successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeButton: false,
        style: toastStyle,
        progressStyle: {
          background: "linear-gradient(to right, #5b3ef0, #a78bfa)",
          boxShadow: "0 0 8px #a78bfa",
          height: "3px",
        },
      });

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Firebase Error:", error);
      toast.update(toastId, {
        render: "✦ Failed to send. Try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeButton: false,
        style: {
          ...toastStyle,
          border: "1px solid rgba(239, 68, 68, 0.55)",
          boxShadow: "0 0 28px rgba(239, 68, 68, 0.3), 0 8px 32px rgba(0,0,0,0.6)",
        },
        progressStyle: {
          background: "linear-gradient(to right, #b91c1c, #f87171)",
          height: "3px",
        },
      });
    }
  };

  return (
    <div className="contact-wrapper container">
      <ToastContainer
        position="top-right"
        closeButton={false}
        toastClassName="portfolio-toast"
        style={{ top: "24px", right: "24px" }}
      />


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
 