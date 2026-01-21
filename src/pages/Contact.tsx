import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "saretotechnologies@gmail.com",
      link: "mailto:saretotechnologies@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+254 715 691 186",
      link: "tel:+254715691186",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Alternative",
      value: "+254 745 939 721",
      link: "tel:+254745939721",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Nairobi, Kenya",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus({ submitting: true, submitted: false, error: false });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
    

      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({ fullName: "", email: "", message: "" });

      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false });
      }, 5000);
    } catch (err) {
      console.error(err);
      setFormStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <section className="flex flex-col lg:flex-row gap-8 text-white">
      {/* CONTACT INFO */}
      <div className="lg:w-80 bg-zinc-900 p-8 rounded-2xl border border-zinc-800 space-y-6">
        <h3 className="text-2xl font-bold">Get in Touch</h3>
        <p className="text-gray-400 text-sm">
          Feel free to reach out anytime
        </p>

        <div className="space-y-4">
          {contactInfo.map((info, i) => (
            <InfoItem key={i} {...info} />
          ))}
        </div>
      </div>

      {/* FORM */}
      <div className="flex-1 bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
        <h2 className="text-3xl font-bold mb-6">
          Contact <span className="text-red-500">Me</span>
        </h2>

        {formStatus.submitted && (
          <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/50 text-green-500 p-4 rounded-lg mb-6">
            <CheckCircle className="w-5 h-5" />
            Message sent successfully!
          </div>
        )}

        {formStatus.error && (
          <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg mb-6">
            <AlertCircle className="w-5 h-5" />
            Failed to send message. Try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="p-4 rounded-lg bg-black border border-zinc-800 focus:border-red-500 outline-none"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-4 rounded-lg bg-black border border-zinc-800 focus:border-red-500 outline-none"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Your Message"
            className="p-4 rounded-lg bg-black border border-zinc-800 focus:border-red-500 outline-none resize-none"
          />

          <button
            disabled={formStatus.submitting}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-black px-8 py-4 rounded-full font-semibold transition disabled:opacity-50"
          >
            {formStatus.submitting ? "Sending..." : <>
              <Send className="w-5 h-5" /> Send Message
            </>}
          </button>
        </form>
      </div>
    </section>
  );
}

function InfoItem({ icon, label, value, link }) {
  const content = (
    <div className="flex items-center gap-3 bg-black p-4 rounded-lg border border-zinc-800 hover:border-red-500 transition">
      <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-red-500">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm text-gray-300">{value}</p>
      </div>
    </div>
  );

  return link ? <a href={link}>{content}</a> : content;
}
