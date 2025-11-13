import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    // Replace these IDs with your EmailJS credentials
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (err) => {
          setSuccess("Failed to send message. Please try again.");
          console.error(err);
          setLoading(false);
        }
      );
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-700 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-700 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-700 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          required
        ></textarea>

        <button
          type="submit"
          disabled={!isFormValid || loading}
          className={`w-full p-3 rounded-md font-semibold ${
            isFormValid && !loading
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-700 cursor-not-allowed"
          } text-white transition`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {success && <p className="text-center text-green-500">{success}</p>}
    </section>
  );
};

export default Contact;
